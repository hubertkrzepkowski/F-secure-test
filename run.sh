#!/bin/sh
if [ ! "$(docker ps -q -f name=webapp)" ]
then
     docker-compose build
     docker-compose up -d
else
     docker-compose restart  
fi 
