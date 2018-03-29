PROJECT_PATH=/home/www-data/sites/chatdemo.stefanwille.com/server/
rsync -avz --delete --exclude '.git' --exclude 'node_modules' -e ssh --progress $PWD/ sw:$PROJECT_PATH
ssh sw "cd $PROJECT_PATH && yarn"
ssh sw "cd $PROJECT_PATH && yarn stop-production"
ssh sw "cd $PROJECT_PATH && yarn start-production"
