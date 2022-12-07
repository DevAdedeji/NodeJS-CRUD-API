const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers')

router.get('/', taskController.getAllTasks)
router.post('/task', taskController.saveTask);
router.get('/task/:id', taskController.getATask)
router.delete('/task/:id', taskController.deleteATask)
router.put('/task/:id', taskController.updateATask)


module.exports = router;