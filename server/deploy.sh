PROJECT_PATH=/home/www-data/sites/chatdemo.stefanwille.com/server/
HOST=www-data@88.99.14.3
rsync -avz --delete --exclude '.git' --exclude 'node_modules' -e ssh --progress $PWD/ $HOST:$PROJECT_PATH
ssh $HOST "cd $PROJECT_PATH && yarn"
ssh $HOST "cd $PROJECT_PATH && yarn stop-production"
ssh $HOST "cd $PROJECT_PATH && yarn start-production"
