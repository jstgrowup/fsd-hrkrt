1. `15.1` https://app.100xdevs.com/courses/3/234/255
2. `15.2` https://app.100xdevs.com/courses/3/234/256
3. `15.3` https://app.100xdevs.com/courses/3/234/257
   `commands lists`
4. docker run mongo
5. docker images (tells us what are the images that are available)
6. docker ps (it will show all the containers that are running)
7. docker run mongo (it will start the container)
8. docker run -d mongo (start the container in detached mode that means once you run the docker you can run other commands in the same terminal)
9. docker run -p 27017:27017 -d mongo (this is called as port mapping)
10. docker kill <container id>
11. docker rmi mongo --force (this will remove the image as well)
12. docker build -t medium-backend . (after making the dockerfile execute this command which will sart the container)
13. docker build -t medium-backend . (once the docker file is ready this command will build the image from the docker file)
14. docker run -p 8001:8001 -e DATABASE_URL="" -e JWT_SECRET="" paytm-backend
15. docker exec -it <container number> /bin/sh (by this command you can interact with the container)
16. docker volume create <volume name> (this is how you create a volume for the data persistance)
17. docker volume rm <volume name> (remove the docker volume)
18. docker run -v <volume name>:/data/db -p 27017:27017 mongo (thats how we mount the database and the data will be persisted irrespective of container is running or stopped you dont need the port mapping as the database container is different from the node server)
19. docker network create <network name> (to create a network)

20. docker network ls (check all the networks that are present)
21. docker network rm <network name> (remove the network)
22. docker network ls (to check all the networks)
23. docker run -d -v volume_database:/data/db --name <databse name> --network <network name> -p 27017:27017 mongo (here i have started the mongo and i have attached the created network to the mongo and i have given the container a name called subhamserver , here subhamserver is like a DNS that has an IP that its pointing actually it resolves to an IP)
24. docker run -d -p 3000:3000 --name <anything> --network <network name>
25. docker push jstgrwup/paytm-test:<tagname>
    example -`docker build -t  jstgrwup/paytm-test .`(here by default the tagname is latest)
    `docker push  jstgrwup/paytm-test`
    `docker build -t  jstgrwup/paytm-test:v1-dev . ` (using tags)
    `docker push  jstgrwup/paytm-test:v1-dev ` (pushing to docker hub)

---

example:-
`docker build -t mongo_app .`
`docker network create my_custom_network`
`docker run -d --name mongoharkirat --network my_custom_network -p 27017:27017 mongo`
`docker run -d -p 3000:3000 --name backendasad --network my_custom_network mongo_app`
`const mongoUrl: string = "mongodb://mongoharkirat:27017/myDatabase";`

---
