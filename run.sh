#!/bin/sh
apt update
apt upgrade
apt install curl
apt install git
if [ ! -x "$(command -v docker)" ]; then
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
fi
if [ ! -x "$(command -v docker-compose)" ]; then
curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
fi
git clone https://github.com/hubertkrzepkowski/F-secure-test.git
cd F-secure-test
if [ ! "$(docker ps -q -f name=webapp)" ]
then
     docker-compose build
     docker-compose up -d
else
     docker-compose restart  
fi 
