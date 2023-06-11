#!/bin/zsh
#
# create-nextkey-app.zsh
# (runs with zsh or bash)

# errexit
set -e

# Set colorize variables in zsh or bash
if [ -n "$ZSH_VERSION" ]; then
  red="\e[1;31m"
  green="\e[1;32m"
  yellow="\e[1;33m"
  cyan="\e[1;36m"
  white="\e[1;37m"
  color_reset="\e[0m"
elif [ -n "$BASH_VERSION" ]; then
  red="\033[0;31m"
  green="\033[0;32m"
  yellow="\033[0;33m"
  cyan="\033[0;36m"
  white="\033[0;37m"
  color_reset="\033[0m"
else
  echo "Run with zsh or bash to continue"
  exit 1
fi

# Verify dependencies
if ! command -v rename &> /dev/null; then
  echo -e "Install$cyan rename$color_reset package to continue";
  exit 1;
fi

# Get project name
NAME="my-app";
if [[ -z "$1" ]]; then
  echo -ne "$cyan?$color_reset What is your project named?$cyan (my-app)$color_reset  "
  if [ -n "$ZSH_VERSION" ]; then
    read "project_name?"
  elif [ -n "$BASH_VERSION" ]; then
    read project_name
  fi
  if [[ ! -z "$project_name" ]]; then
    NAME="$project_name";
  fi
  if [[ "$project_name" =~ " " ]]; then
    echo "Error: Name cannot include whitespace"
    exit 1
  fi
else
  NAME="$1";
fi

# Clone starter into project directory
echo ""
mkdir "$NAME"
cd "$NAME"
if [[ -z "$OVERRIDE_STARTER_REPO" ]]; then
  git clone https://github.com/tw-studio/nextkey-aws-starter.git .
else
  git clone --branch "${OVERRIDE_STARTER_BRANCH:=main}" "$OVERRIDE_STARTER_REPO" .
fi
rm -rf .git
git init -b main

# Prepare different formats of NAME and DATE
UNDERSCORED_NAME=${NAME//-/_} # database variables
PASCAL_CASE_NAME=$(perl -pe 's/(^|-|_)(\w)/\U$2/g' <<<"$NAME") # cdk
TODAYS_DATE="$(date +'%Y-%m-%d')"

# Configure starter with project's name
perl -i -pe"s/nextkey\-aws\-starter/$NAME/g" package.json
perl -i -pe"s/my\-app/$NAME/g" appspec.yml
perl -i -pe"s/my\-app/$NAME/g" scripts/start-server.sh
perl -i -pe"s/my\-app/$NAME/g" scripts/populate-secrets.sh
perl -i -pe"s/my\-app/$NAME/g" scripts/populate-secrets-prod.node.js
perl -i -pe"s/my\-app/$NAME/g" scripts/db-prod-migrate.sh
perl -i -pe"s/my\-app/$NAME/g" scripts/confirm-db-prod.sh
perl -i -pe"s/my\-app/$NAME/g" .env/production.env.js
perl -i -pe"s/my\-app/$NAME/g" .env/test.env.js
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/user-data/setup-codespace.sh
perl -i -pe"s/nextkey\-aws\-starter[-a-z]*/$NAME/g" .github/workflows/run-PR-tests.yml
perl -i -pe"s/my\-app/$NAME/g" .env/common.env.js
perl -i -pe"s/my\-app/$NAME/g" .env/RENAME_TO.secrets.js
perl -i -pe"s/my_app/$UNDERSCORED_NAME/g" .env/RENAME_TO.secrets.js
cp .env/RENAME_TO.secrets.js .env/.secrets.js
BASEDIR_PWD=$(pwd)
perl -i -pe"s{rootPwd = ''}{rootPwd = '$BASEDIR_PWD'}g" .env/.secrets.js
SECRET=$(./scripts/generate-hs512-secret.sh)
perl -i -pe"s{secretJWT = 'secretJWT secret'}{secretJWT = '$SECRET'}g" .env/.secrets.js
TEST_GH_SECRET=$(./scripts/generate-hs512-secret.sh)
perl -i -pe"s{secretJWT secret}{$TEST_GH_SECRET}g" scripts/populate-secrets-test-gh.node.js
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/.env/RENAME_TO.secrets.js
perl -i -pe"s/my_app/$UNDERSCORED_NAME/g" cdk/my-app-cdk/.env/RENAME_TO.secrets.js
cp cdk/my-app-cdk/.env/RENAME_TO.secrets.js cdk/my-app-cdk/.env/.secrets.js
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/package.json
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/cdk.json
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/lib/my-app-cdk-stack.ts
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/bin/my-app-cdk.ts
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/test/my-app-cdk.test.ts
perl -i -pe"s/my\-app/$NAME/g" cdk/my-app-cdk/scripts/stack-precheck.sh
perl -i -pe"s/my\-app/$NAME/g" db/docker/docker-compose-dev-fw-pg.yml
perl -i -pe"s/my\-app/$NAME/g" db/docker/docker-compose-prod-flyway.yml
perl -i -pe"s/my\-app/$NAME/g" README.md
perl -i -pe"s/my\-app/$NAME/g" CHANGELOG.md
perl -i -pe"s/my_app/$UNDERSCORED_NAME/g" .env/test.env.js
perl -i -pe"s/my_app/$UNDERSCORED_NAME/g" .env/development.env.js
perl -i -pe"s/my_app/$UNDERSCORED_NAME/g" scripts/populate-secrets-test-gh.node.js
perl -i -pe"s/MyApp/$PASCAL_CASE_NAME/g" cdk/my-app-cdk/lib/my-app-cdk-stack.ts
perl -i -pe"s/MyApp/$PASCAL_CASE_NAME/g" cdk/my-app-cdk/bin/my-app-cdk.ts
perl -i -pe"s/MyApp/$PASCAL_CASE_NAME/g" cdk/my-app-cdk/test/my-app-cdk.test.ts
cd cdk/my-app-cdk
rm -f .gitignore
mv USE_THIS.gitignore .gitignore
perl -i -pe's/("version": ")([0-9.]+)(",)/${1}0.0.0$3/g' package.json
rename "s/my\-app/$NAME/g" lib/my-app-cdk-stack.ts
rename "s/my\-app/$NAME/g" bin/my-app-cdk.ts
rename "s/my\-app/$NAME/g" test/my-app-cdk.test.ts
cd ../create-certs-cdk
rm -f .gitignore
mv USE_THIS.gitignore .gitignore
cp .env/RENAME_TO.secrets.js .env/.secrets.js
perl -i -pe"s/my\-app/$NAME/g" user-data/run-certbot.sh
perl -i -pe"s/my\-app/$NAME/g" scripts/certs-precheck.sh
perl -i -pe"s/my\-app/$NAME/g" test/create-certs-cdk.test.ts
perl -i -pe"s/MyApp/$PASCAL_CASE_NAME/g" test/create-certs-cdk.test.ts
cd ../..
rm -f .gitignore
mv USE_THIS.gitignore .gitignore
rename "s/my\-app/$NAME/g" cdk/my-app-cdk
perl -i -pe's/("version": ")([0-9.]+)(",)/${1}0.0.0$3/g' package.json
perl -i -pe's/("license": ")(MIT)(",)/${1}UNLICENSED$3/g' package.json
rm -f LICENSE
perl -i -pe's/("description": ")([A-Za-z0-9. ]+)(",)/$1$3/g' package.json
rm -f CHANGELOG.md
mv CHANGELOG_NEW.md CHANGELOG.md
perl -i -pe"s/YYYY\-MM\-DD/$TODAYS_DATE/g" CHANGELOG.md
perl -i -pe"s/my\-app/$NAME/g" public/manifest.webmanifest

# Confirm success
echo ""
echo -e "Successfully created app $green$NAME$color_reset from$cyan nextkey-aws-starter$color_reset"
echo ""
echo -e "See$white README.md$color_reset for next steps"
echo ""
