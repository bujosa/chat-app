const { Router } = require("express");

const router = Router();

// create new user
router.post("/new", (req, res) => {
  res.json({
    ok: true,
    user: "ABC",
  });
});

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
