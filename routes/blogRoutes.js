const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
  Blog.find()
    .then(data => res.render('index', { name: 'Vitalii', blogs: data }))
    .catch(error => console.log(error))
});

router.get('/add-blog', (req, res) => {
  const blog = new Blog({});

  blog.save()
    .then(result => res.send(result))
    .catch(error => console.log(error))
});

router.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => res.send(result))
    .catch(error => console.log(error));
});

//  --- POST ----
router.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => res.redirect('/all-blogs'))
    .catch(error => console.log(error));
});

router.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.render('blogPage', { blog }))
    .catch(error => console.log(error));
});

//  ---- DELETE ----
router.delete('/blogs/:id', ({ params: { id } }, res) => {
  Blog.findByIdAndDelete(id)
    .then(() => res.json({ redirect: '/blogs' }))
    .catch(error => console.log(error));
});

router.get('/blog', (req, res) => {
  Blog.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => console.log(error));
});

module.exports = router;

