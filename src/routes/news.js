const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/NewsController');

            router.get('/:slug', newsController.index);
router.get('/', newsController.main);

module.exports = router;
