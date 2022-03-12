import Joi from "joi";

export const listSchema = Joi.object({
    name: Joi.string().required(),
    uid: Joi.string().required(),
});

export const renameListSchema = Joi.object({
    listId: Joi.string().required(),
    name: Joi.string().required(),
});

export const listIdSchema = Joi.object({
    listId: Joi.string().required(),
});