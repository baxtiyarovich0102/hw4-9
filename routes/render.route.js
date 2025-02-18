const express = require("express");
let router = express.Router();
const renderController = require("../controller/render.controller");
router.get("/", renderController.renderIndex);
router.get("/index", renderController.renderIndex);
router.get("/about", renderController.renderAbout);
router.get("/service", renderController.renderService);
router.get("/contact", renderController.renderContact);

module.exports = router;
