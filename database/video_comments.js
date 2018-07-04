const db = require('./index.js');
const Promise = require('bluebird');

const getVideoComments = (video_id) => {
  return new Promise((resolve, reject) => {
    const userQuery = `SELECT userid, comment FROM video_comments WHERE videoid = '${video_id}'`;
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
      `INSERT INTO video_comments (comments, userid, videoid) VALUES (${comment}, ${userid}, ${videoid})`;
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