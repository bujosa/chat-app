const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { createJWt } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: "This email already exist",
      });
    }

    // Save in DB
    const user = new User(req.body);

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    const token = await createJWt(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contact the Administrator",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Email or password not match",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Email or password not match",
      });
    }
    const token = await createJWt(user.id);
    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const renewToken = async (req, res) => {
  try {
    const uid = req.uid;
    const token = await createJWt(uid);
    const user = await User.findById(uid);
    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "User not Found",
      });
    }
    res.json({
      ok: true,
      user,
      token,
    });
  } catch (e) {
    res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

module.exports = { createUser, login, renewToken };
