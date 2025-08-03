const express = require("express");

const router = express.Router();

router.get("/app", (req, res) => {
  res.json({
    text: "Welcome to the application",
    info: {
      name: "Basic Node App",
      version: "1.0.0",
    },
  });
});

module.exports = router;
