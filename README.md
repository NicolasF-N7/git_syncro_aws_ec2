# git_syncro_aws_ec2
# Git - EC2
## Bond local git repo to remote repo
### GitHub
create repo, main branch = master
### Local
git init\
git add *\
git commit -m "First"\
git remote add origin git@__.git\
(ssh-add)\
git push --set-upstream origin master\

## Syncro with EC2
### Install node on EC2
(?) sudo -s
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

### Install git
sudo apt install git

### Add a new ssh key to the agent
key: git_syncro
passphrase: syncro
eval $(ssh-agent) && ssh-add ~/.ssh/git_syncro

### Add the key to github repo
