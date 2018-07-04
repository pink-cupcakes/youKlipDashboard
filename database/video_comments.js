const db = require('./index.js');
const Promise = require('bluebird');

const getVideoComments = (video_id) => {
  return new Promise((resolve, reject) => {
    const userQuery = `SELECT video_comments FROM links WHERE video_id = '${video_id}'`;
    db.query(userQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    });
  });
};

const newComment = (comment, userid, videoid) => {
  return new Promise((resolve, reject) => {
    const videoQuery =
      `INSERT INTO video_comments (comments, user_id, video_id) VALUES (${comment}, ${userid}, ${videoid})`;
    db.query(videoQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    })
  })
};

module.exports.getVideoComments = getVideoComments;
module.exports.newComment = newComment;