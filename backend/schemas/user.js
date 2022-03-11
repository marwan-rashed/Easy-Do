import Joi from "joi";

export const userSchema = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    birthDate: Joi.number().required(),
    phone: Joi.string().required(),
    password: Joi.string().required().min(6),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});