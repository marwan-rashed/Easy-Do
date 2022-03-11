import User from "../models/user.js";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export default class AuthController {
    static async createUser(req, res) {
        const { firstName, lastName, email, birthDate, phone, password } = req.body;
        const uid = uuid();

        if(!firstName || !lastName || !email || !birthDate || !password) {
            res.status(400).json({
                success: false,
                message: 'Missing required data',
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

            User
                .create({
                    uid,
                    firstName,
                    lastName,
                    email,
                    birthDate,
                    phone,
                    password: hashed,
                })
                .then(() => {
                    res.status(200).json({
                        success: true,
                        uid,
                        message: 'User Cerated.'
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json({
                        success: false,
                        message: 'Failed to create user'
                    });
                });
    }

    static login(req, res) {}
}