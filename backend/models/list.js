import Mongoose from 'mongoose';

const listSchema = new Mongoose.Schema({
    listId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    uid: {
        type: String,
        required: true,
    },
});

const List = Mongoose.model('List', listSchema);

export default List;