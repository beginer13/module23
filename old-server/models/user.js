const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema);

module.exports = User;