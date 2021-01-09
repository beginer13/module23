const jwt = require("jsonwebtoken");

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Console } = require('console');

const ACCESS_TOKEN_SECRET = "sajkdhfkbjllkj23123jnnr2l31"
const ACCESS_TOKEN_LIFE = 1200;
const REFRESH_TOKEN_SECRET = "sdasadfhsdkjlfbbc8743b3487tuiybi34rb"
const REFRESH_TOKEN_LIFE = 86400;

const app = express();

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    phone: String,
    birthday: Date,
    passNom: String,
    passDate: Date,
    passOffice: String,
    passOfficeCod: String,
    licenceDate: Date,
    licenceNom: String,
    password: String
});

const User = mongoose.model('User', userSchema)

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log('Connection to Users has been created')});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('I have received your GET request');
});

app.post("/authentication/", (req, res) => {
    const {
        email,
        password
    } = req.body;

    const userData = {
        email: email,
        password: password
    };

    tryAuthentication(userData)
        .then((result) => {
            if (result !== null) {
                res.send(result)
            } else {
                res.sendStatus(401)
            }
        })
        .catch(() => {
            res.sendStatus(500)
        })
})

function tryAuthentication(userData) {
    return User
        .find({ password: userData.password, email: userData.email })
        .exec()
        .then((documents) => {
            const user = documents[0]
            if ( user != null ) {
                const payload = {
                    email: user.email
                };
                const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE});
                const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE});

                console.log(user.name)
                
                return { accessToken, refreshToken, name: user.name };
            }
            else {
                return null
            }
        })
}

app.post("/registration", (req, res) => {

    const { name, 
            email, 
            phone, 
            birthday,
            passNom,
            passDate,
            passOffice,
            passOfficeCod,
            licenceDate,
            licenceNom,
            password } = req.body;
            
    const userData = {
            name: name,
            email: email,
            phone: phone,
            birthday: birthday,
            passNom: passNom, 
            passDate: passDate,
            passOffice: passOffice,
            passOfficeCod: passOfficeCod,
            licenceDate: licenceDate,
            licenceNom: licenceNom,
            password: password};

    createUserIfAlreadyNotExists(userData).then(result => res.send(result));        
} );

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
};

app.listen(8000, () => {
    console.log('I am listening you !!!')
});