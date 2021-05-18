const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-layouts');
const routes = require('./server/routes/user');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(expressLayouts);
app.use(routes);

app.listen(3000);

