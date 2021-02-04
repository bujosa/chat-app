const jwt = require("jsonwebtoken");

const createJWt = (uid) => {
  return new Promise(() => {
    const payload = {
      uid,
    };
  });
};

module.exports = {
  createJWt,
};
