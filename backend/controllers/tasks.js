import Task from "../models/task.js";
import { v4 as uuid } from 'uuid';

export default class TasksController {
    static createTask(req, res) {
        const { title, details, dueDate, listId } = req.body;
        const taskId = uuid();

        Task
            .create({
                taskId,
                title,
                details: details ? details : '',
                dueDate: dueDate ? dueDate : 0,
                completed: false,
                listId,
            })
            .then(async() => {
                let tasks = await Task.find({ listId }).select('-_id -__v');

                res.status(200).json({
                    success: true,
                    data: {
                        tasks,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

    static getListTasks(req, res) {
        const { listId } = req.body;

        Task
            .find({ listId })
            .select('-_id -__v')
            .then((result) => {
                res.status(200).json({
                    success: true,
                    data: {
                        result,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

    static getTask(req, res) {
        const { taskId } = req.params;

        Task
            .find({ taskId })
            .select('-_id -__v')
            .then((result) => {
                res.status(200).json({
                    success: true,
                    data: {
                        result,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

    static completeTask(req, res) {
        const { taskId } = req.params;

        Task
            .findOneAndUpdate({ taskId }, { completed: true }, { new: true })
            .then((result) => {
                res.status(200).json({
                    success: true,
                    data: {
                        result,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

    static editTask(req, res) {
        const { taskId, title, details, dueDate } = req.params;

        const update = {
            title,
            details: details ? details : '',
            dueDate: dueDate ? dueDate : 0,
        };

        Task
            .findOneAndUpdate({ taskId }, update, { new: true })
            .then((result) => {
                res.status(200).json({
                    success: true,
                    data: {
                        result,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

    static removeTask(req, res) {
        const { taskId } = req.params;

        Task
            .remove({ taskId })
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'Task deleted',
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed',
                });
            });
    }

}