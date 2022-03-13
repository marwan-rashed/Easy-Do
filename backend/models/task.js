import Mongoose from 'mongoose';

const taskSchema = new Mongoose.Schema({
    taskId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: false,
    },
    dueDate: {
        type: Number,
        required: false,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    listId: {
        type: String,
        required: true,
    },
});

const Task = Mongoose.model('Task', taskSchema);

export default Task;