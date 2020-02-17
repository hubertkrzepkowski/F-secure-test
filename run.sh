#!/bin/sh
apt update
apt upgrade
apt install curl
apt install git
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
git clone https://github.com/hubertkrzepkowski/F-secure-test.git
cd F-secure-test
if [ ! "$(docker ps -q -f name=webapp)" ]
then
     docker-compose build
     docker-compose up -d
else
     docker-compose restart  
fi 
