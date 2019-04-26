# teste api_ts

Teste construindo API

# Dependencies

- NodeJS
- npm ou yarn
- mongoDB
- typy-script
- body-parser": "^1.18.3",
- "cors": "^2.8.5",
- "express": "^4.16.4",
- "express-validator": "^5.3.1",
- "http-status": "^1.3.1",
- "jsonwebtoken": "^8.4.0",
- "moment": "^2.24.0",
- "mongoose": "^5.4.1",
- "multer": "^1.4.1",
- "ts-node": "^7.0.1",
- "validator": "^10.11.0"

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



### image

- docker hub
image: michelroger/api-ts


## config class Database

### Docker DB

private DB_URL = "mongodb://link-db/foregon";

#### File
#### docker-compose

version: "3"
services:
api:
image: michelroger/api-ts
ports: - "3050:3050"
links: - link-db
link-db:
image: tutum/mongodb
ports: - "27017:27017" - "28017:28017"
environment: - AUTH=no

## Installation
### Docker

api_ts is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3050, so change this within the Dockerfile / docker-compose if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd {path}/api_ts}
$ docker-compose up
```

or

```sh
cd {path}/api_ts}
$ docker pull michelroger/api-ts
```


Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 3050 of the host to port 3050 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 3050:3050 michelroger/api-ts
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:3050
```

# Routes

local
http://localhost:3050
docker
http://localhost:3050

### POST/partial

http://localhost:3050/api/v1/partial

### POST/final

http://localhost:3050/api/v1/final

### routes for --dev

- /api/v1/partial (get)
- /api/v1/partial (post)
- /api/v1/partial/:id (put)
- /api/v1/partial/:id (delete)

- /api/v1/final (post)
- /api/v1/final (get)

### POST Request parameters

- token: { type: mongoose.Types.ObjectId }
- name: { type: String }
- email: { type: String }
- cpf: { type: String }
- birthDate: { type: Date }
- phone: { type: String } 

### Optional functions api

- cors / methods: "GET,OPTIONS,PUT,POST,DELETE"
- upload files / multer
- auth / jsonwebtoken (jwt)
