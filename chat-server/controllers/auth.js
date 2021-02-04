const { response } = require("express");
const { validationResult } = require("express-validator");

const createUser = async (req, res) => {
  res.json({
    ok: true,
    msg: true,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const renewToken = async (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { createUser, login, renewToken };
