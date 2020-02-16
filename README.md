To start :
       in F-secure-test directory  run script: "run.sh" 
    or 
       in F-secure-test directory  run commands :
       
            docker-compose build
            docker-compose up -d

To test endpoints on default port(8080) (change port in docker-compose.yaml line 25) :
        use commands :
        
            curl --request GET \
            --url http://localhost:8080/list 
            
            curl --request POST \
            --url http://localhost:8080/echo \
            --header 'content-type: application/json' \
            --data '[{"id": 1,"name": "Microsoft"}]'
           
            curl --request GET \
            --url http://localhost:8080/random 
     
