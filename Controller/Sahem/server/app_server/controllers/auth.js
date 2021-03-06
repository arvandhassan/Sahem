import passport from 'passport';
import mongoose from 'mongoose';
import { User } from './../../app_api/models/User/User';
const register = (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    //check if the password are matches DONE
    if (!(req.body.password === req.body.confirmPassword)) {
        return res
            .status(400)
            .json({ "message": "Password does not match" });
    }
    //TODO check if the user exist

    //TODO save the user in db DONE
    const username = req.body.username;
    const email = req.body.email;
    const user = new User();

    user.username = username;
    user.email = email;
    user.setPassword(req.body.password);
    user.save(
        (err) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }

            else {
                const token = user.generateJwt();
                res
                    .status(200)
                    .json({ token });
            }
        }
    );

};

const login = (req, res) => {
    console.log(req.body);

    if (!req.body.username || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }
    passport.authenticate('local', (err, user, info) => {

        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            console.log(err);
            if (err) {
                res.send(err);
            }

            const token = user.generateJwt();

            return res.json({ token });
        });

    })
        (req, res);

};

module.exports = {
    register,
    login
};