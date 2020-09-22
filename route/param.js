


const path = require('path');

const express = require('express');

const paramController = require('../controller/param');

const router = express.Router();

router.get('/',paramController.getAddParam); 
  
router.post("/",paramController.postParam);

router.post("/done",paramController.postOrder);
module.exports = router;