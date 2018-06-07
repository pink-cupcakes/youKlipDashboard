const express        = require('express');
const request        = require('request');
const bodyParser     = require('body-parser');
const axios          = require('axios');
const url            = require('url');
const cors           = require('cors');
const passport       = require("passport");
const twitchStrategy = require("passport-twitch").Strategy;
const cookieParser   = require("cookie-parser");
const cookieSession  = require("cookie-session");
const AWS            = require('aws-sdk');
const user           = require('../database/video_data.js');
const config         = require('./config.js');

const app = express();

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

AWS.config.update({ region: 'us-west-1' });

let ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

passport.use(new twitchStrategy({
    clientID: config.twitchID,
    clientSecret: config.twitchSecret,
    /*to be updated*/
    callbackURL: "http://localhost:5000/auth/twitch/callback",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    return;
  }
));

app.get('/', (req, res) => {
  // user.getUser();
  // console.log(test);
});

app.get("/auth/twitch", passport.authenticate("twitch"));
app.get("/auth/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: url.format({pathname: "http://localhost:3000/"}) },
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect(url.format({pathname: "http://localhost:3000/"}));
    }
));

// let params = {
//     InstanceIds: ['i-09c7d8998b882f858']
// };

// ec2.describeInstances(params, function(err, data) {
//     if (err) {
//       console.log("Error", err.stack);
//     } else {
//       console.log("Success", JSON.stringify(data));
//     };
// });

let server = app.listen(5000, function() {
  let port = server.address().port;
  console.log('Listening to port ', port);
});
