import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = Mongoose.model('User', userSchema);

export default User;