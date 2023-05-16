'use strict';

/* This code exports a middleware function that handles errors in an Express application. The function
takes four parameters: `error`, `req`, `res`, and `next`. When an error occurs in the application,
this middleware function is called and it sends a response to the client with a status code of 500
and an error object that includes information about the error, the route that caused the error, the
query parameters, and the request body. If the error is a string, it is sent as the message property
of the error object. Otherwise, the error message is concatenated with the string "SERVER ERROR:"
and sent as the message property. */
module.exports = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(error) === 'string' ? error : `SERVER ERROR: ${error.message}`,
  });
};