'use strict';
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();
require('./config/routes')(app);

require('./config/db')

const PORT = 4000;

console.log("Welcome to Node JS");

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});