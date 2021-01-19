const { tryAuthentication, createUserIfAlreadyNotExists } = require('../services/authService')

function root(req, res) {
    res.send('I have received your GET request')
}

function authentication(req, res) {
    const {
        email,
        password
    } = req.body;

    tryAuthentication(email, password)
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
}

function registration(req, res) {
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

    createUserIfAlreadyNotExists(userData)
        .then(result => res.send(result));        
}

module.exports = {
    authentication,
    registration,
    root
};