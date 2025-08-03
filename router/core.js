const express = require("express");

const config = require("../config");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ text: `Welcome to ${config.appName} API` });
});

module.exports = router;
