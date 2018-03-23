# Connect The Dots

[View Deployment On Heroku](https://connect-the-dots-map.herokuapp.com/)

An exploration into Leaflet.js with React and Redux.

This project leverages the Leaflet.js maps API with the power of React and Redux.
Users can plant latitude and longitude onto a map.  They can then... connect the dots.
Users can remove points on the map.  Make sure to check out the different maps layers.
`Spinal Map` should not be missed!  The linked API is built with Node and Express.
Data is persisted with MongoDB and Mlab.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
git
```

```
npm
```

```
MongoDB
```

### Installing

Clone this project.
```
$ git clone git@github.com:jsullivan5/Connect-The-Dots.git

```
Install dependencies.
```
$ npm install
```

### Starting Application

* Rename .sample.env to .env
* It is preconfigured to a local Mongo connection string.

Start Mongo shell in terminal
```
mongod
```

Start Dev Server:
```
$ npm start
```

## Linting

This project uses eslint for linting.

Check for linter errors
```
npm run lint
```

Automatically fix linter errors (There aren't any.  Use with caution)
```
npm run lint -- --fix
```

## Running the tests

```
$ npm test
```

### Break down into end to end tests

Test are written in Jest.

## Built With

* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* [React Leaflet](https://github.com/PaulLeCam/react-leaflet)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [MongoDB](https://docs.mongodb.com/)

## Screenshots

![App Screenshot](screenshot.png?raw=true "Spinal Map!")
