const express = require("express");
let router = express.Router();
const renderController = require("../controller/render.controller");
router.get("/", renderController.renderIndex);


module.exports = router