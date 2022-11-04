'use strict';

const httpErrors = require('http-errors');
const JWT = require('jsonwebtoken');

const verifyJWT = (req,res,next) => {

    var token = req.headers['token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    JWT.verify(token,'secret', function(err, decoded) {

     if(err)
     {
        res.status(200).send({ auth: false, message: 'Invalid Token' });
     }
     else
     {
        next();
     }   
     
    });
  };

  module.exports = verifyJWT;
