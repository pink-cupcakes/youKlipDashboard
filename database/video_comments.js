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

const newComment = (comment, videoid) => {
  return new Promise((resolve, reject) => {
    const videoQuery =
      `INSERT INTO video_comments (comments, video_id)
      SELECT '${comment}', '${videoid}' FROM links
      WHERE NOT EXISTS (SELECT * FROM video_comments
        WHERE comments='${comment}' AND video_id='${videoid}'
      ) LIMIT 1`;
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