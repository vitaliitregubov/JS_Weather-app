const express = require('express');
const app = express();

const productsRoute = require('./routes/products');
const peopleRouter = require('./routes/people');
const apiRouter = require('./routes/api');

app.use(express.urlencoded({ extended: false }));
app.use('/people', peopleRouter);
app.use('/api', apiRouter);
app.use('/products', productsRoute);

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
})

app.post('/login', (req, res) => {
  console.log(req.body);
})

app.listen(3000);

