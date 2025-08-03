const express = require("express");

const coreRouter = require("./core");
const APIRouter = require("./api");

const router = express.Router();

router.use(coreRouter);
router.use("/api", APIRouter);

module.exports = router;
