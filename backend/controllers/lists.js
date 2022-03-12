import { v4 as uuid } from 'uuid';
import List from '../models/list.js';

export default class ListsController {
    static getLists(req, res) {
        const { uid } = req.body;

        List
            .find({ uid })
            .select('listId name -_id')
            .then((results) => {
                res.status(200).json({
                    success: true,
                    data: {
                        lists: results,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed'
                });
            });
    }
    
    static createList(req, res) {
        const { uid, name } = req.body;
        const listId = uuid();

        List
            .create({
                listId,
                name,
                uid,
            })
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'List created',
                    data: {
                        listId,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    success: false,
                    message: 'Failed to create list'
                });
            })
    }

    static renameList(req, res) {
        const { name } = req.body;
        const { listId } = req.params;

        List
            .findOneAndUpdate({ listId }, { name }, { new: true })
            .then((result) => {
                res.status(200).json({
                    success: true,
                    message: 'List renamed',
                    data: {
                        list: result,
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

    static deleteList(req, res) {
        const { listId } = req.params;

        List
            .remove({ listId })
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'List deleted',
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