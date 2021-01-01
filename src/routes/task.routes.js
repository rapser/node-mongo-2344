import { Router } from 'express'
import * as taskCtrl from '../controllers/task.controller'

const router = Router();

router.get('/tasks', taskCtrl.findAllTasks)

router.post('/tasks', taskCtrl.createTask)

router.delete('/tasks/:id', taskCtrl.deleteTask)

router.get('/tasks/done', taskCtrl.findAllDoneTask)

router.get('/tasks/:id', taskCtrl.findOneTask)

router.put('/tasks/:id', taskCtrl.updateTask)

export default router;