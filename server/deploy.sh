PROJECT_PATH=/home/www-data/sites/chatdemo.stefanwille.com/server
ssh sw "rsync -avz --delete --exclude '.git' --exclude 'node_modules' -e ssh --progress . $PROJECT_PATH"
ssh sw "cd $PROJECT_PATH && yarn"
ssh sw "cd $PROJECT_PATH && ./stop"
ssh sw "cd $PROJECT_PATH && ./start"
