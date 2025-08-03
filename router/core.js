const express = require("express");

const config = require("../config");

const router = express.Router();

router.get("/api", (req, res) => {
  res.json({
    text: `Welcome to ${config.appName} API`,
    docs: `https://${req.headers.host}/docs`,
  });
});

router.get("/analytics", (req, res) => {
  res.json({
    text: "Analytics endpoint is under construction",
    data: {
      text: "Analytics of the last 24 hours",
       visits: 0,
      users: 0,
      errors: 0,
      uptime: 0,
    },
  });
});

module.exports = router;
