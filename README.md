# teste api_ts

Teste construindo API

# Dependencies
  - NodeJS
  - npm ou yarn
  - mongoDB
  - typy-script
  - body-parser": "^1.18.3",
  -  "cors": "^2.8.5",
  -  "express": "^4.16.4",
  -  "express-validator": "^5.3.1",
  -  "http-status": "^1.3.1",
  -  "jsonwebtoken": "^8.4.0",
  -  "moment": "^2.24.0",
  -  "mongoose": "^5.4.1",
  -  "multer": "^1.4.1",
  -  "ts-node": "^7.0.1",
  -  "validator": "^10.11.0"

# DevDependencies
  - "@types/body-parser": "^1.17.0",
  - "@types/cors": "^2.8.4",
  - "@types/express": "^4.16.0",
  - "@types/express-validator": "^3.0.0",
  - "@types/http-status": "^0.2.30",
  - "@types/jsonwebtoken": "^8.3.0",
  - "@types/multer": "^1.3.7",
  - "@types/node": "^10.12.18",
  - "@types/validator": "^10.11.0",
  - "nodemon": "^1.18.11",
  - "tsc": "^1.20150623.0",
  - "typescript": "^3.4.5"

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd {path} /api_ts
$ npm install -d
$ npm start
```

For production environments...

```sh
$ npm install --production
```

### BD
 docker hub
 image: tutum/mongodb
 ports:
"27017:27017"
"28017:28017"

## config class Database
### local DB
private DB_URL = "mongodb://localhost:27017/foregon";
### Docker DB
private DB_URL = "mongodb://link-db/foregon";

#### docker-compose
version: "3"
services:
  api:
    image: tadrianonet/api-ts
    ports:
      - "80:3050"
    links:
      - link-db
  link-db:
    image: tutum/mongodb
    ports:
      - "27017:27017"
      - "28017:28017"
    environment:
      - AUTH=no
 

 
### Docker
api_ts is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd {path}/api_ts}
$ docker-compose up
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of api_ts.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 80:3050 --restart="always" <youruser>/api_ts:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:80
```
# Routes
local
http://localhost:3050
docker
http://localhost:80

### POST/partial
http://localhost:80/api/v1/partial

### POST/final
http://localhost:80/api/v1/final

### routes for --dev

 - /api/v1/partial (get)
 - /api/v1/partial (post)
 - /api/v1/partial/:id (put)
 - /api/v1/partial/:id (delete)

 - /api/v1/final (post)
 - /api/v1/final (get)


### Request parameters

 - productId: { type: mongoose.Types.ObjectId }
 - name: { type: String }
 - email: { type: String }
 - cpf: { type: String }
 - birthDate: { type: Date }
 - phone: { type: String }
 - createDate: { type: Date, default: Date.now }

### Optional functions -dev

 - cors / methods: "GET,OPTIONS,PUT,POST,DELETE"
 - upload files / multer
 - auth / jsonwebtoken (jwt)