const { response } = require("express");

const createUser = async (req, res = response) => {
  res.json({
    ok: true,
    msg: true,
  });
};

const login = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const renewToken = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewToken };
