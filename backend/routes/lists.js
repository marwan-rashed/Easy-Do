import express from 'express';
import ListsController from '../controllers/lists.js';
import { uidSchema } from '../schemas/user.js';
import { listIdSchema, listSchema, renameListSchema } from '../schemas/list.js';
import validate from '../middlewares/validation.js';

const router = express();

router.patch(
    '/',
    validate(uidSchema),
    ListsController.getLists,
);

router.post(
    '/',
    validate(listSchema),
    ListsController.createList,
);

router.put(
    '/:listId',
    validate(renameListSchema),
    ListsController.renameList,
);

router.delete(
    '/:listId',
    validate(listIdSchema),
    ListsController.deleteList,
);

export default router;