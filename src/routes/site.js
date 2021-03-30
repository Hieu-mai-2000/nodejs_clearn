const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');
const Course = require("../app/models/Course")
const paginatedMiddleware = require('../app/middlewares/PaginatedMiddleware')
const authorization = require('../app/middlewares/AuthorizationMiddleware')



router.get('/login', siteController.loginShow);
router.post('/login', siteController.login);
router.get('/student',authorization(Course,'student','teacher','admin'), siteController.student);
router.get('/teacher',authorization(Course,'teacher','admin'), siteController.teacher);
router.get('/admin',authorization(Course,'admin'), siteController.admin);

router.get('/test',paginatedMiddleware(Course), siteController.test);
router.get('/', siteController.main);

module.exports = router;
