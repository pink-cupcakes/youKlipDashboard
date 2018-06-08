import { getUser } from './user_data.js';

const db = require('./index.js');
const Promise = require('bluebird');

const getUserVideos = (userid) => {
  return new Promise((resolve, reject) => {
    const userQuery = `SELECT video_url FROM users WHERE user_id = '${id}'`;
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
    const loginQuery =
      `INSERT INTO links (video_url, user_id)
      SELECT * FROM (SELECT '${userid}', '${url}') AS tmp
      WHERE NOT EXISTS (
        SELECT username FROM users WHERE video_url = '${url}' AND user_id = '${userid}'
      ) LIMIT 1`;
    db.query(loginQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      return resolve(result);
    })
  })
};

module.exports.getUserVideos = getUserVideos;
module.exports.newUpload = newUpload;