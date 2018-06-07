const db = require('./index.js');
const Promise = require('bluebird');

const getUser = (req, res, user, file) => {
    return new Promise((resolve, reject) => {
        const userQuery = `SELECT * FROM users`;
        db.query(userQuery, (err, result) => {
          if (err) {
            return reject(err);
          };
          console.log(result);
          return resolve(result);
        });
    });
}

module.exports.getUser = getUser;