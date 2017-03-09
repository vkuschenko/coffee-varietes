# Coffee varieties of the world

The original assignment is stored in `_assignment` directory

## Installation

Go through steps below, to install and build the application

* Check out code from GitHub. Command: `git clone https://github.com/vkuschenko/coffee-varietes.git`
* Go to the project's directory. Command: `cd ./coffee-varietes`
* Install dependencies. Command: `npm install`
* Run unit-tests. Command: `npm run test`
* Build the application. Command: `npm run build`
* Check application running `index.html` from the `./dist` directory

## Build with docker

* Prerequisite: all `Installation` steps should be passed
* Build docker image. Command: `docker build -t assignment/coffee .`
* Run docker container. Command: `docker run --name docker-coffee -p 8080:80 -d assignment/coffee`
* Check application. Open browser with URL: `http://localhost:8080/`

## Additional notes

The application builds in `dev` mode.