import Joi from "joi";

export const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    birthDate: Joi.number().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
});