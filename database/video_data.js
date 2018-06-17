const db = require('./index.js');
const Promise = require('bluebird');

const getUserVideos = (id) => {
  return new Promise((resolve, reject) => {
    const userQuery = `SELECT video_url FROM links WHERE user_id = '${id}'`;
    db.query(userQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    });
  });
};

const newUpload = (userid, url) => {
  return new Promise((resolve, reject) => {
    const videoQuery =
      `INSERT INTO links (video_url, user_id)
      SELECT * FROM (SELECT '${userid}', '${url}') AS tmp
      WHERE NOT EXISTS (
        SELECT * FROM links WHERE video_url = '${url}' AND user_id = '${userid}'
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
module.exports.newUpload = newUpload;