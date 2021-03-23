const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/course/stored', meController.show);
router.put('/course/:id', meController.updateCourse);
router.get('/:id/update', meController.updateShow);

module.exports = router;
