import User from "../models/user.js";

export default class ProfileController {
    static getProfile(req, res) {
        const { uid } = req.params;

        User
            .findOne({ uid })
            .select('-_id -__v -password -uid')
            .then((result) => {
                res.status(200).json({
                    success: true,
                    data: {
                        result,
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
}