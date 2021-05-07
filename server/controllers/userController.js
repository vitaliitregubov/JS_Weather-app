exports.view = (req, res) => {
  res.render('index', { title: 'Home', users: [] });
}

