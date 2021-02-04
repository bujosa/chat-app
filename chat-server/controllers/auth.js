const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: true,
  });
};

const login = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewToken };
