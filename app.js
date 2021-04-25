const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://tregubov:Thsrcqu17@cluster0.zk3vu.mongodb.net/node_learning?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to a db'))
  .then(() => app.listen(3000))
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  Blog.find()
    .then(() => res.render('index', { name: 'Vitalii', todos: [] }))
    .catch(error => console.log(error))
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => res.redirect('/all-blogs'))
    .catch(error => console.log(error));
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

app.get('/add-blog', (req, res) => {
  const blog = new Blog({});

  blog.save()
    .then(result => res.send(result))
    .catch(error => console.log(error))
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => res.send(result))
    .catch(error => console.log(error));
});

app.get('/blog', (req, res) => {
  Blog.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => console.log(error));
})

app.use((req, res) => {
  res.render('404');
});

