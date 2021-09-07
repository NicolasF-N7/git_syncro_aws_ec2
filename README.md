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

## Deploy git repo to EC2 instance
### Install node on EC2 instance
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
Settings -> Deploy keys

### Clone repo on EC2 instance
git init
git clone ssh://__.git
cd __
git pull --rebase origin master


### Setup auto-updates
cd ~
git clone https://github.com/A21z/node-cd.git
cd node-cd
npm install
chmod +x bitbucket.sh contentful.sh github.sh
vim github.sh
"cd /home/ubuntu/ && eval $(ssh-agent) && ssh-add ~/.ssh/git_syncro && cd /home/ubuntu/git_syncro_aws_ec2 && git reset --hard && git pull --rebase origin master"

sudo -s
  chmod 777 /home/ubuntu/node-cd/config.js
  add 140.82.115.0/16 to githubAuthorizedSubnets in config.js (So that only github servers can notify your ec2 instance to update git repo)
  chmod 555 /home/ubuntu/node-cd/config.js
  cd __/node-cd
  export WWW_PORT=61440
  node src/index.js
