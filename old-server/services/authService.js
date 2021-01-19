const User = require('../models/user')
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = "sajkdhfkbjllkj23123jnnr2l31";
const ACCESS_TOKEN_LIFE = 1200;
const REFRESH_TOKEN_SECRET = "sdasadfhsdkjlfbbc8743b3487tuiybi34rb";
const REFRESH_TOKEN_LIFE = 86400;

function createUserIfAlreadyNotExists(userData) { 
    return User.exists({ email: userData.email }).
        then((isExists) => {
            if(isExists) {
                return {text: "User is already exist", success: false};
            } else {
                const newUser = new User(userData);
                return newUser.save().
                then(() => {
                    const payload = {
                        email: userData.email,
                        password: userData.password
                    };
                    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
                    const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
                    return { accessToken, refreshToken, success: true, text: "You are passed registration successfully" };
                }).
                catch(() => Promise.reject("Could not save user"));
            } 
        });
}

function tryAuthentication(email, password) {
    return User
        .find({ password, email })
        .exec()
        .then((documents) => {
            const user = documents[0]
            if ( user != null ) {
                const payload = {
                    email: user.email
                };
                const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
                const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});
                return { accessToken, refreshToken, name: user.name };
            }
            else {
                return null
            }
        })
}

module.exports = {
    createUserIfAlreadyNotExists,
    tryAuthentication
};