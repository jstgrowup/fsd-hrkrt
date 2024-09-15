1. `15.1` https://app.100xdevs.com/courses/3/234/255
2. `15.2` https://app.100xdevs.com/courses/3/234/256
   `commands lists`
3. docker run mongo
4. docker images (tells us what are the images that are available)
5. docker ps (it will show all the containers that are running)
6. docker run mongo (it will start the container)
7. docker run -d mongo (start the container in detached mode that means once you run the docker you can run other commands in the same terminal)
8. docker run -p 27017:27017 -d mongo (this is called as port mapping)
9. docker kill <container id>
10. docker rmi mongo --force (this will remove the image as well)
11. docker build -t medium-backend . (after making the dockerfile execute this command which will sart the container)
12. docker build -t medium-backend . (once the docker file is ready this command will build the image from the docker file)
13. docker run -p 8001:8001 -e DATABASE_URL="" -e JWT_SECRET="" paytm-backend
14. docker exec -it <container number> /bin/sh (by this command you can interact with the container)
15. docker volume create <volume name> (this is how you create a volume for the data persistance)
16. docker volume rm <volume name> (remove the docker volume)
17. docker run -v <volume name>:/data/db -p 27017:27017 mongo (thats how we mount the database and the data will be persisted irrespective of container is running or stopped you dont need the port mapping as the database container is different from the node server)
18. docker network create <network name> (to create a network)

19. docker network ls (check all the networks that are present)
20. docker network rm <network name> (remove the network)
21. docker network ls (to check all the networks)
22. docker run -d -v volume_database:/data/db --name <databse name> --network <network name> -p 27017:27017 mongo (here i have started the mongo and i have attached the created network to the mongo and i have given the container a name called subhamserver , here subhamserver is like a DNS that has an IP that its pointing actually it resolves to an IP)
23. docker run -d -p 3000:3000 --name <anything> --network <network name>

---

example:-
`docker build -t mongo_app .`
`docker network create my_custom_network`
`docker run -d --name mongoharkirat --network my_custom_network -p 27017:27017 mongo`
`docker run -d -p 3000:3000 --name backendasad --network my_custom_network mongo_app`
`const mongoUrl: string = "mongodb://mongoharkirat:27017/myDatabase";`

---

24. docker run
