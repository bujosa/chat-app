const jwt = require("jsonwebtoken");

const createJWt = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  createJWt,
};
