# Movie app contains one function to Get all list of movie and their details

## Running the application locally

Before running application locally make sure you have created and set the content of `.env` file, please [env.sample](./env.sample) file for properties.

- To install the dependencies use the following command.

  ```
  npm install
  ```

- To Run this app use the following command.

  ```
  npm run start
  ```

- To Run this app in the development mode, using nodemon use the following command.
  ```
  npm run serve
  ```

## In the application there CRUD api's please use the below CURLs to access those.

Note: Change localhost to server ip if access from server

- Get All movie

```
curl --location --request GET 'http://localhost:5000/movie?pageNo=1' | json_pp
```

- Get movie by id

```
curl --location --request GET 'http://localhost:5000/movie/3'
```


# Creating Image pushing it to the docker hub

### To Create image from docker compose file, run following command

```
docker build -t <username>/<image-name>:<tag> .

```

### To push the image on the docker hub use the following commands

```
docker login --username=<username> --email=<email>
Password:

---------------------------------------------------------------------------------------------------------------

docker push <username>/<image-name>:<tag>
```

### To run the newly created image locally use the follwing command

```
docker run -d -p 5000:5000 --name <image-name> <username>/<image-name>:<tag>
```
