const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const userRouter = require('./server/routes/user');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(userRouter);

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 
});

pool.getConnection((error, connection) => {
  if(error) {
    console.log(error);
  }
  console.log('connected to a DB');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

