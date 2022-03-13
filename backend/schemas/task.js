import Joi from "joi";

export const taskSchema = Joi.object({
    title: Joi.string().required(),
    details: Joi.string().optional(),
    dueDate: Joi.number().optional(),
    listId: Joi.string().required(),
});

export const editTaskSchema = Joi.object({
    taskId: Joi.string().required(),
    title: Joi.string().required(),
    details: Joi.string().optional(),
    dueDate: Joi.number().optional(),
});

export const taskIdSchema = Joi.object({
    taskId: Joi.string().required(),
});