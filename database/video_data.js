const db = require('./index.js');
const Promise = require('bluebird');

const getUserVideos = (userid) => {
  return new Promise((resolve, reject) => {
    const userQuery = `SELECT id, video_url FROM links WHERE user_id = '${userid}'`;
    db.query(userQuery, (err, result) => {
      console.log(result);
      if (err) {
        return reject(err);
      };
      return resolve(result);
    });
  });
};

const getVideoLikes = (videoid) => {
  return new Promise((resolve, reject) => {
    const videoQuery = `SELECT userid FROM video_likes WHERE videoid = '${videoid}'`;
    db.query(videoQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    });
  })
};

const newUpload = (url, userid) => {
  return new Promise((resolve, reject) => {
    const videoQuery =
      `INSERT INTO links (video_url, user_id)
      SELECT '${url}', '${userid}' FROM links
      WHERE NOT EXISTS (SELECT * FROM links
        WHERE video_url='${url}' AND user_id='${userid}'
      ) LIMIT 1`;
    db.query(videoQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    })
  })
};

module.exports.getUserVideos = getUserVideos;
module.exports.getVideoLikes = getVideoLikes;
module.exports.newUpload = newUpload;