#!/bin/bash
#
# git-push-release-branch-to-public.sh

set -e # errexit

echo "Starting git-push-release-branch-to-public..."

# |0| Set formatting variables
# colors
blue="\033[0;34m"
color_reset="\033[0m"
cyan="\033[0;36m"
green="\033[0;32m"
red="\033[0;31m"
white="\033[0;37m"
yellow="\033[0;33m"
# content
arrow="\xE2\x86\x92"
checkmark="\xE2\x9C\x94"
chevron="\xE2\x80\xBA"
done="done"
info="info"
success="Success!"
xmark="\xE2\x9C\x97"

# |1| Request user input for necessary details

echo -ne "Enter main branch:$cyan (main)$color_reset "
read main_branch
if [[ -z "$main_branch" ]]; then
  main_branch="main"
fi

echo -ne "Enter feature branch:$cyan (next-update)$color_reset "
read feature_branch
if [[ -z "$feature_branch" ]]; then
  feature_branch="next-update"
fi

echo -ne "Enter public branch:$cyan (public)$color_reset "
read public_branch
if [[ -z "$public_branch" ]]; then
  public_branch="public"
fi

echo -ne "Enter public remote:$cyan (public)$color_reset "
read public_remote
if [[ -z "$public_remote" ]]; then
  public_remote="public"
fi

read -p "Enter new release tag (#.#.# format): " release_tag
read -p "Enter the feature description: " feature_description

read -p "Enter the previous private tag (#.#.#-xxx format): " previous_private_tag
private_tag_pattern='^[0-9]+\.[0-9]+\.[0-9]+-[a-zA-Z0-9]+$'
if ! [[ $previous_private_tag =~ $private_tag_pattern ]]; then
  echo -e "$red$xmark$color_reset Private tag not in format #.#.#-xxx (e.g. 0.1.2-develop)"
  echo ""
  exit 1
else
  private_tag_suffix="${previous_private_tag##*-}"
fi

new_private_tag="${release_tag}-${private_tag_suffix}"

read -p "Enter the previous public release tag (#.#.# format): " previous_public_release_tag

if [[ -z "$release_tag" || -z "$feature_description" || -z "$previous_private_tag" || -z "$previous_public_release_tag" ]]; then
  echo -e "$red$xmark$color_reset One or more inputs are empty"
  echo ""
  exit 1
fi

# |2| Check for uncommitted or untracked changes

if [[ -n $(git status --porcelain) ]]; then
  echo -e "$red$xmark$color_reset Uncommitted or untracked changes detected"
  echo -e "$cyan$chevron$color_reset Please commit or stash your changes before running this script"
  exit 1
fi

# |3| Create an empty commit with tag in both commit message and actual tag

git switch $feature_branch
git commit --allow-empty -m "[$release_tag] $feature_description"
git tag -a $new_private_tag -m "[$release_tag] $feature_description" && echo "Tag created: $new_private_tag"

# |4| Push to private remote feature branch

echo "Pushing to $feature_branch in origin..."
git push origin
git push origin refs/tags/$new_private_tag

# |5| Fast forward main to the latest commit, if possible

if git merge-base --is-ancestor $main_branch $feature_branch; then
  git branch -f $main_branch && echo "Fast-forwarded $main_branch to $feature_branch"
else
  echo -e "$red$xmark$color_reset $cyan${main_branch}$color_reset cannot be fast-forwarded to $feature_branch"
  exit 1
fi

# |6| Switch to the private main and push to main in the private remote

echo "Pushing changes to $main_branch in origin..."
git push origin $main_branch

# |7| Switch to public branch and cherry pick the new commits between the previous and new private tags

git switch $public_branch
echo "Cherry picking commits from $previous_private_tag to $new_private_tag..."
git cherry-pick $previous_private_tag..$new_private_tag --strategy-option=theirs --allow-empty --keep-redundant-commits

# |8| Run an interactive rebase from the last public release tag

echo "Rebasing interactively from $previous_public_release_tag..."
GIT_SEQUENCE_EDITOR='bash -c "perl -i -pe '\''$. == 1 ? s/^pick/edit/ : s/^pick/fixup/'\'' $1 && cat $1"' git rebase --keep-empty -i 0.0.2

# Pause to amend the commit manually (necessary when empty), then continue the rebase
echo "Rewording commit..." && git commit --allow-empty --amend -m "[$release_tag] $feature_description"
echo "Continuing rebase..." && git rebase --continue

# |9| Add an annotated tag to this new public release commit

git tag -a $release_tag -m "[$release_tag] $feature_description" && echo "Tag created: $release_tag"

# |10| Push the local public branch, both code and tag, to the public remote's main branch

echo -ne "Type ${cyan}y$color_reset to push to public remote:$cyan (n)$color_reset "
read final_confirmation
if [[ "$final_confirmation" == 'y' ]]; then
  git push $public_remote ${public_branch}:${main_branch}
  git push $public_remote refs/tags/$release_tag
else
  echo -e "$red$xmark$color_reset Aborted push to public"
  exit 1
fi
