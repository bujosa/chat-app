const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, renewToken, login } = require("../controllers/auth");

const router = Router();

// create new user
router.post("/new", createUser);

// Login
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
  ],
  login
);

// Token re-validation
router.get("/renew", renewToken);

module.exports = router;

/* 
path: api/login
*/
