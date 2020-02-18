To start 
   clone repository and in "F-secure-test" directory  run(with superuser privileges) script: "run.sh" 
   
   or
    
   run(with superuser privileges) script bellow in directory where you want to clone repository and run solution.
	   
	        #!/bin/sh
		apt-get update -y
		apt-get upgrade -y 
		apt-get install curl -y
		apt-get install git -y
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

       

To test endpoints on default port(8080) (change port in docker-compose.yaml line 25)
        use commands :
        
            curl --request GET \
            --url http://localhost:8080/list 
            
            curl --request POST \
            --url http://localhost:8080/echo \
            --header 'content-type: application/json' \
            --data '[{"id": 1,"name": "Microsoft"}]'
           
            curl --request GET \
            --url http://localhost:8080/random 
     
