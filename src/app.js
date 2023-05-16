'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


require('dotenv').config();
const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

/* This code is creating a route for the path '/bad' using the HTTP GET method. When a request is made
to this route, the middleware function is called with the request, response, and next objects. The
`next` function is called with an error message as an argument, which will trigger the error
handling middleware to handle the error. */
app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use(errorHandler);

app.use('*', notFound);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};


