const { Router } = require("express");
const { createUser, renewToken, login } = require("../controllers/auth");

const router = Router();

// create new user
router.post("/new", createUser);

// Login
router.post("/", login);

// Token re-validation
router.get("/renew", renewToken);

module.exports = router;

/* 
path: api/login
*/
