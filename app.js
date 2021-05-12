const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const userRoutes = require('./routes/userRoutes');
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.use(express.static('public'));
app.use(userRoutes);

const jwt = require('jsonwebtoken');

app.get('/api', (req, res) => {
  res.json({
    msg: "Welcome!"
  })
});

app.listen(3000);

