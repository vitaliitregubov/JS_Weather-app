const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const expressLayouts = require('express-layouts');
const homeRoute = require('./routes/homeRoute');
const apiRoute = require('./routes/apiRoute');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(expressLayouts);
app.use(homeRoute);
app.use('/api', apiRoute);

app.listen(3000);

