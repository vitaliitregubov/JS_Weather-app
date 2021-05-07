const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', user: 'Vitalii', tasks: ['learn Node.js', 'speak English', 'exercises', 'cooking', 'buy groceries'] });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

const port = process.env.PORT || 3000;

app.listen(port);

