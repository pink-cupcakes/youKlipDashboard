const express        = require('express');
const request        = require('request');
const bodyParser     = require('body-parser');
const axios          = require('axios');
const url            = require('url');
const cors           = require('cors');
const passport       = require('passport');
const twitchStrategy = require('passport-twitch').Strategy;
const cookieParser   = require('cookie-parser');
const cookieSession  = require('cookie-session');
const cache          = require('memory-cache');
const AWS            = require('aws-sdk');
const { userLogin }  = require('../database/user_data.js');
const config         = require('./config.js');
const { getUserVideos, getVideoLikes, newUpload } = require('../database/video_data.js');
const { getVideoComments, newComment } = require('../database/video_comments.js');

const app = express();

const corsOption = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
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
    callbackURL: 'http://localhost:5000/auth/twitch/callback',
    scope: 'user_read'
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

/*
  Twitch oAuth methods
  Requests permission from Twitch to access emails
  Uses Twitch userid as an indexing method internally (can cause issues in long run)
*/
app.get('/auth/twitch', passport.authenticate('twitch'));
app.get('/auth/twitch/callback',
  passport.authenticate('twitch', { failureRedirect: 'http://localhost:3000/'}),
    function(req, res) {
      let user = req.user[0]
      res.redirect(url.format({
        pathname:'http://localhost:5000/user_videos',
        query: {
          'userid': user.id,
          'username': user.username,
          'email': user.email
        }
      }));
    }
);

/*
  Retieves the videos uploaded by a given user
  Input: userid = user id
  Output: array of tuples [videoid, videoUrl]
*/
app.get('/user_videos', (req, res) => {
  getUserVideos(req.query.userid)
  .then((videos) => {
    videos = videos.map((videoData) => {
      return(videoData);
    });
    res.redirect(url.format({
      pathname:'http://localhost:3000/home',
      query: {
        'videos': JSON.stringify(videos)
      }
    }))
  })
});


/*
  Retrieve the users who have liked a given video
  Input: videoId = video id,
  Output: an array of users who have liked the video. To show the number of likes, return array length
*/
app.get('/videoLikes', (req, res) => {
  getVideoLikes(req.query.videoId)
    .then((users_liked) => {
      res.send(JSON.stringify(users_liked));
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})


/*
  Creates new video upload for user
  Input: url = YouTube URL
        id = userid
  Output: N/A - error will throw error
*/
app.post('/video_upload', (req, res) => {
  newUpload(req.query.url, req.query.id)
    .catch((err) => {
      res.status(500).send(err);
    });
  res.send();
});

/*
  Retrieves all comments from a given videoid
  Input: videoid = video id
  Output: Array of tuples [userid, comment]
*/
app.get('/video_comments', (req, res) => {
  getVideoComments(req.query.videoid)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

/*
  Creates new video comment for user
  Input: comment = Comment input
         userid = user id
         videoid = video id
  Output: N/A - error will throw error
*/
app.post('/video_newComment', (req, res) => {
  newComment(req.query.comment, req.query.userid, req.query.videoid)
    .catch((err) => {
      res.status(500).send(err);
    });
  res.send();
})

// let params = {
//     InstanceIds: ['i-09c7d8998b882f858']
// };

// ec2.describeInstances(params, function(err, data) {
//     if (err) {
//       console.log('Error', err.stack);
//     } else {
//       console.log('Success', JSON.stringify(data));
//     };
// });

let server = app.listen(5000, function() {
  let port = server.address().port;
  console.log('Listening to port ', port);
});