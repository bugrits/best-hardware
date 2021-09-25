#!/bin/bash
echo "
-------------------------
  Stopping application
-------------------------
"

pm2 stop all
pm2 delete all
systemctl stop nginx

echo "
-------------------------
   Updating system...
-------------------------
"

rm best-hardware/ -r
git clone -b dev https://github.com/bugrits/best-hardware/

echo "
-------------------------
  Building application
-------------------------
"
cd best-hardware/server/
npm i
npm install pm2@latest -g
pm2 start app.js --name "Server"
cd ../client/
npm i
npm install pm2@latest -g
npm run build
pm2 serve build/ 3000 --name "Client"

echo "
--------------------------
  Deploying application
--------------------------
"

pm2 save
systemctl start nginx

echo "
-------------------------
     Updated system!
-------------------------
"