#!/bin/zsh
#
# install-dependencies.sh

# errexit, xtrace
set -ex

# send stdout and stderr to logs file
mkdir -p ~/log
exec > >(tee -a ~/log/install-dependencies.log) 2>&1
echo "[$(date)]"

# source ec2 env and create if doesn't exist
[[ -s ~/.ec2env ]] && source ~/.ec2env
[[ ! -f ~/.ec2env ]] && touch ~/.ec2env && echo '#!/bin/zsh
' >> ~/.ec2env

###
##
# Install node

# Check nvm doesn't exist
if [[ ! -f ~/.nvm/nvm.sh ]]; then

  # Install and activate nvm, then install node lts
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  set +x # stop xtrace
  echo '. ~/.nvm/nvm.sh' && . ~/.nvm/nvm.sh
  echo 'nvm install --lts' && nvm install --lts
  set -x # start xtrace

  # Ubuntu: use setcap (libcap2-bin) to allow node to open ports <1024
  sudo setcap cap_net_bind_service=+ep $(command -v node)

  # Install pnpm and pm2 globally with npm
  echo 'Install pnpm...'
  npm install -g pnpm

  # Add pnpm global bin env var to .ec2env
  echo 'Add PNPM_HOME to ~/.ec2env...'
  export PNPM_HOME="$HOME/.local/share/pnpm"
  grep -qxF 'export PNPM_HOME="$HOME/.local/share/pnpm"' ~/.ec2env || \
  echo 'export PNPM_HOME="$HOME/.local/share/pnpm"
' >> ~/.ec2env

  # Add nvm env var to .ec2env
  echo 'Add NVM_DIR to ~/.ec2env...'
  export NVM_DIR="$HOME/.nvm"
  grep -qxF 'export NVM_DIR="$HOME/.nvm"' ~/.ec2env || \
  echo 'export NVM_DIR="$HOME/.nvm"
' >> ~/.ec2env

  # Add nvm startup calls to .zshrc
  echo 'Add nvm startup calls to .zshrc...'
  grep -qxF '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm' ~/.zshrc || \
  echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
' >> ~/.zshrc

  # Add pnpm to path in .ec2env
  echo 'Update PATH with pnpm locations...'
  export PATH=$PATH:$(dirname $(command -v pnpm))
  export PATH=$PATH:$(pnpm bin)
  export PATH=$PATH:$PNPM_HOME
  typeset -aU path
  grep -qxF "export PATH=\$PATH:$(dirname $(command -v pnpm))" ~/.ec2env || \
  echo "export PATH=\$PATH:$(dirname $(command -v pnpm))
export PATH=\$PATH:$(pnpm bin)
export PATH=\$PATH:\$PNPM_HOME
typeset -aU path    # dedupes path
" >> ~/.ec2env

  # Use pnpm to install pm2
  echo 'Install pm2 globally with pnpm...'
  pnpm add --global pm2

fi

###
##
# Install docker-compose

# |0| Check rootless docker status
set +e # disable errexit
export DOCKER_HOST=unix:///run/user/1000/docker.sock
export XDG_RUNTIME_DIR=/run/user/1000
dockerStatus=$(systemctl --user --no-pager --full status docker)
if ! ($(echo $dockerStatus | grep -q 'Rootless') \
     && $(echo $dockerStatus | grep -q 'active (running)')); then
  
  # |1| Install dependencies

  set -e # enable errexit
  echo "Installing packages for docker-compose..." \
  && sudo apt update -y \
  && sudo apt install -y --no-install-recommends \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common

  # |2| Pre-emptively set docker privileges for ubuntu

  set +e # disable errexit
  sudo groupadd docker
  sudo usermod -aG docker ubuntu
  newgrp docker
  set -e # reenable errexit

  # |3| Install and start latest docker

  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
  sudo apt install -y docker-ce
      
  # |4| Install latest docker-compose

  export docker_compose_latest=$(curl -Ls -o /dev/null -w %{url_effective}  https://github.com/docker/compose/releases/latest  | grep -o '[^/]*$')
  sudo curl -L "https://github.com/docker/compose/releases/download/${docker_compose_latest}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose

  # |5| Install and start rootless docker

  # |5.1| Install prerequisites
  sudo apt install -y uidmap

  # |5.2| Stop and disable rootful docker
  sudo systemctl stop docker.service docker.socket
  sudo systemctl disable --now docker.service docker.socket

  # Debug
  export DOCKER_HOST=unix:///run/user/1000/docker.sock
  export XDG_RUNTIME_DIR=/run/user/1000
  grep -qxF "export XDG_RUNTIME_PATH=/run/user/1000" ~/.ec2env || \
  echo "export DOCKER_HOST=unix:///run/user/1000/docker.sock
export XDG_RUNTIME_PATH=/run/user/1000
" >> ~/.ec2env
  loginctl enable-linger ubuntu
  sudo chown -R ubuntu /home/ubuntu
  sudo perl -i -pe's/SYSTEMD=""/SYSTEMD="1"/g' /usr/bin/dockerd-rootless-setuptool.sh

  # |5.3| Fix and run docker's rootless setup tool
  /usr/bin/dockerd-rootless-setuptool.sh install --force

  # |5.4| Configure to run on login
  systemctl --user --now enable docker
fi
set -e # reenable errexit

###
##
# Install postgresql

# |0| Check postgresql utility is installed
set +e # disable errexit
if ! command -v pg_isready &> /dev/null; then

  # |1| Install postgresql
  set -e # enable errexit
  echo "Installing postgresql..." \
  && sudo apt update -y \
  && sudo apt install -y --no-install-recommends \
        postgresql
fi
set -e

###
##
# Clean up

# Clean up apt directory caches
sudo apt clean -y
sudo rm -rf /var/lib/apt/lists/*
