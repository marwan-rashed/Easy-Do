import express from 'express';
import AuthController from '../controllers/auth.js';

const router = express();

router.post(
    '/createUser',
    AuthController.createUser,
);

router.patch(
    '/login',
    AuthController.login,
);

export default router;