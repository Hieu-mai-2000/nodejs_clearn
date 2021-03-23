const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/course/stored', meController.show);
router.put('/course/:id', meController.updateCourse);
router.delete('/course/:id', meController.delete);
router.get('/:id/update', meController.updateShow);

module.exports = router;
