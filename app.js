const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://tregubov:Thsrcqu17@cluster0.zk3vu.mongodb.net/node_learning?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to a db'))
  .then(() => app.listen(3000))
  .catch(error => console.log(error));

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// blog routes
app.use(blogRoutes);

app.use((req, res) => {
  res.render('404');
});

