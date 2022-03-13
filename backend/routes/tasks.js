import express from 'express';
import TasksController from '../controllers/tasks.js';
import validate from '../middlewares/validation.js';
import { listIdSchema } from '../schemas/list.js';
import { taskIdSchema, taskSchema, editTaskSchema } from '../schemas/task.js';

const router = express();

router.post(
    '/',
    validate(taskSchema),
    TasksController.createTask,
);

router.patch(
    '/',
    validate(listIdSchema),
    TasksController.getListTasks,
);

router.get(
    '/:taskId',
    validate(taskIdSchema),
    TasksController.getTask,
);

router.put(
    '/:taskId',
    validate(editTaskSchema),
    TasksController.editTask,
);

router.put(
    '/:taskId/complete',
    validate(taskIdSchema),
    TasksController.completeTask,
);

router.delete(
    '/:taskId',
    validate(taskIdSchema),
    TasksController.removeTask,
);

export default router;