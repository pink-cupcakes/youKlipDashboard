const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

AWS.config.update({region:'us-east-1'});

let server = app.listen(5000, function () {
    let port = server.address().port;
    console.log('Listening to port ', port);
});