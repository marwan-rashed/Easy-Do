import express from 'express';
import ProfileController from '../controllers/profile.js';
import validate from '../middlewares/validation.js';
import { uidSchema } from '../schemas/user.js'

const router = express();

router.get(
    '/:uid',
    validate(uidSchema),
    ProfileController.getProfile,
);

export default router;