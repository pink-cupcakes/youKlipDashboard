const db = require('./index.js');
const Promise = require('bluebird');

const getUser = (id) => {
    return new Promise((resolve, reject) => {
      const userQuery = `SELECT id, username, email FROM users WHERE id = '${id}'`;
      db.query(userQuery, (err, result) => {
        if (err) {
          return reject(err);
        };
        return resolve(result);
      });
    });
}

const userLogin = (userid, username, email) => {
  return new Promise((resolve, reject) => {
    const loginQuery =
      `INSERT INTO users (id, username, email)
      SELECT '${userid}', '${username}', '${email}' FROM users
      WHERE NOT EXISTS (SELECT * FROM users
        WHERE email='${email}'
      ) LIMIT 1`;
    db.query(loginQuery, (err, result) => {
      if (err) {
        return reject(err);
      };
      getUser(userid)
        .then((result) => {
          return resolve(result);
        })
        .catch((err) => {
          console.log(err);
        })
    })
  })
}

module.exports.getUser = getUser;
module.exports.userLogin = userLogin;