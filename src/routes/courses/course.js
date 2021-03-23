const express = require('express');
const router = express.Router();
const courseController = require('../../app/controller/CourseController');

router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.post('/', courseController.createPost);

// router.get('/', courseController.main);

module.exports = router;
