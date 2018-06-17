const express                      = require('express');
const request                      = require('request');
const bodyParser                   = require('body-parser');
const axios                        = require('axios');
const url                          = require('url');
const cors                         = require('cors');
const passport                     = require("passport");
const twitchStrategy               = require("passport-twitch").Strategy;
const cookieParser                 = require("cookie-parser");
const cookieSession                = require("cookie-session");
const cache                        = require('memory-cache');
const AWS                          = require('aws-sdk');
const { userLogin }                = require('../database/user_data.js');
const { getUserVideos, newUpload } = require('../database/video_data.js');
const config                       = require('./config.js');

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
    callbackURL: "http://localhost:5000/auth/twitch/callback",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, next) {
    userLogin(profile.id, profile.username, profile.email)
      .then((result) => {
        return next(null, result);
      })
      .catch((err) => {
        return next(err, null);
      })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get('/', (req, res) => {});

app.get("/auth/twitch", passport.authenticate("twitch"));
app.get("/auth/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: "http://localhost:3000/"}),
    function(req, res) {
      let user = req.user[0]
      res.redirect(url.format({
        pathname:"http://localhost:5000/user_videos",
        query: {
          'id': user.id,
          'username': user.username,
          'email': user.email,
          'test_url': 'https://www.youtube.com/watch?v=9bvVM3rR4Wc'
        }
      }));
    }
);

app.get("/user_videos", (req, res) => {
  newUpload(req.query.test_url, req.query.id)
    .then((result) => {
      getUserVideos(req.query.id)
      .then((videos) => {
        videos = videos.map((videoURL) => {
          return(videoURL.video_url);
        });
        res.redirect(url.format({
          pathname:"http://localhost:3000/home",
          query: {
            'videos': JSON.stringify(videos)
          }
        }))
      })
    })
});

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
