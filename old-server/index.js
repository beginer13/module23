const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { authentication, registration, root } = require('./controllers/authController')

const app = express();

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log('Connection to Users has been created')});

app.use(cors());
app.use(express.json());

app.get('/', root)
app.post('/authentication', authentication);
app.post('/registration', registration);

app.listen(8000, () => {
    console.log('I am listening you !!!')
});