import {Router} from 'express'
import * as taskCtrl from '../controllers/task.controller'

const router = Router();

router.get('/tasks', taskCtrl.findAllTasks)

router.post('/tasks', taskCtrl.createTask)

router.get('/tasks/:id', taskCtrl.findOneTask)

router.delete('/tasks/:id', taskCtrl.deleteTask)

router.get('/tasks/done', taskCtrl.findAllDoneTask)

export default router;