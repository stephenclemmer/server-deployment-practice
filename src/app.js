'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
/* `const PORT = process.env.PORT || 3002;` is setting the port number for the server to listen on. It
first checks if there is a port number specified in the environment variable `process.env.PORT`. If
there is, it uses that port number. If not, it defaults to port number 3002. */

require('dotenv').config();
const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use(errorHandler);

app.use('*', notFound);

/**
 * This function starts the server and listens for incoming requests on a specified port.
 */
function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start};


