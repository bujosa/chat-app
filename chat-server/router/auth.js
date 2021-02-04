const { Router } = require("express");

const router = Router();

router.post("/new", (req, res) => {
  res.json({
    ok: true,
    user: "ABC",
  });
});

module.exports = router;
