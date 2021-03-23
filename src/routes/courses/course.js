const express = require('express');
const router = express.Router();
const courseController = require('../../app/controller/CourseController');

router.get('/:slug', courseController.show);
// router.get('/', courseController.main);

module.exports = router;
