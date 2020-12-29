const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Console } = require('console');
// const { string } = require('prop-types');

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
    licenceNom: String
});

const User = mongoose.model('User', userSchema)

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log('Connection to Users has been created')});

app.use(cors());

app.get('/', (req, res) => {
    res.send('I have received your GET request');
});

app.use(express.json());

app.post('/', (req, res) => {

    const { name, 
            email, 
            phone, 
            birthday,
            passNom,
            passDate,
            passOffice,
            passOfficeCod,
            licenceDate,
            licenceNom } = req.body;
            
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
            licenceNom: licenceNom};

    createUserIfAlreadyNotExists(userData).then(result => res.send(result));        
} );

function createUserIfAlreadyNotExists(userData) { 
    return User.exists({ email: userData.email }).
        then((isExists) => {
            if(isExists) {
                return "User is already exist";
            } else {
                const newUser = new User(userData);
                return newUser.save().
                then(() => "User has been saved successfully").
                catch(() => Promise.reject("Could not save user"));
            } 
        });
};


app.listen(8000, () => {
    console.log('I am listening you !!!')
});