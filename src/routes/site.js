const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');
const Course = require("../app/models/Course")
const paginatedMiddleware = require('../app/middlewares/PaginatedMiddleware')


router.get('/test',paginatedMiddleware(Course), siteController.test);
router.get('/', siteController.main);

module.exports = router;
