const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

AWS.config.update({region:'us-west-1'});

ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

let params = {
    InstanceIds: ['i-09c7d8998b882f858']
};

ec2.describeInstances(params, function(err, data) {
    if (err) {
      console.log("Error", err.stack);
    } else {
      console.log("Success", JSON.stringify(data));
    }
});

let server = app.listen(5000, function () {
    let port = server.address().port;
    console.log('Listening to port ', port);
});