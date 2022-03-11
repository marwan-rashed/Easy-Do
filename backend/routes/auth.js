import express from 'express';
import AuthController from '../controllers/auth.js';
import validate from '../middlewares/validation.js';
import { userSchema, loginSchema } from '../schemas/user.js';

const router = express();

router.post(
    '/createUser',
    validate(userSchema),
    AuthController.createUser,
);

router.patch(
    '/login',
    validate(loginSchema),
    AuthController.login,
);

export default router;