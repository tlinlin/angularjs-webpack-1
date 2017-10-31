# angularjs-webpack-1
# clone our repo
$ git clone https://github.com/tlinlin/angularjs-webpack-1.git

# change directory to your app
$ cd angularjs-webpack

# install the dependencies with npm
$ npm install

# start the server
$ npm run serve:dev


  "scripts": {
    "clean": "rimraf dist build",
    "build:dev": "npm run clean & webpack --env.config=dev",
    "build:prod": "npm run clean & webpack --env.config=prod",
    "serve:dev": "webpack-dev-server --env.config=dev",
    "serve:prod": "webpack-dev-server --env.config=prod --compress"
  },

go to http://localhost:8080 in your browser.
