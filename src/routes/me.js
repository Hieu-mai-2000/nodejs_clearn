const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/course/stored', meController.show);
router.get('/trash/course', meController.trashShow);
router.put('/course/:id', meController.updateCourse);
router.delete('/course/force/:id', meController.deleteForce);
router.delete('/course/:id', meController.delete);
router.patch('/trash/:id', meController.restoreCourse);
router.get('/:id/update', meController.updateShow);

module.exports = router;
