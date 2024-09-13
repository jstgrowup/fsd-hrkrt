1. `15.1` https://app.100xdevs.com/courses/3/234/255
2. `15.2`
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
