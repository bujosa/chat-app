const { Router } = require("express");
const createUser = require("../controllers/auth");

const router = Router();

// create new user
router.post("/new", createUser);

// Login
router.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
});

// Token re-validation
router.get("/renew", (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
});

module.exports = router;

/* 
path: api/login
*/
