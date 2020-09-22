const path = require('path');

const express = require('express');

const router = express.Router();

const projectController = require('../controller/project');

router.get("/project",projectController.getProjects);

router.post("/project",projectController.postProjects);




module.exports = router;