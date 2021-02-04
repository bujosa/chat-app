const jwt = require("jsonwebtoken");

const validateJWT = () => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "Token is empty",
      });
    }
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.uid = payload.uid;
    next();
  } catch (e) {
    return res.status(401).json({
      ok: false,
      msg: "Token is not valid",
    });
  }
};

module.exports = {
  validateJWT,
};
