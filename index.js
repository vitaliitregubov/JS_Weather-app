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

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "0000"
});


app.listen(3000, () => {
  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
  })
});

