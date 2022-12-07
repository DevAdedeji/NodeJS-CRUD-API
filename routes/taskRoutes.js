const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers')

router.get('/', taskController.getAllTasks)
router.post('/post', taskController.saveTask);

module.exports = router;