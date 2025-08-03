const express = require("express");

const coreRouter = require("./core");

const router = express.Router();

router.use("/", coreRouter);

module.exports = router;
