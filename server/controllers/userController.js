const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "0000"
});

connection.connect(err => {
  if (err) {
    return console.error("Error: " + err.message);
  }
  else{
    console.log("connected to a DataBase successfully");
  }
});

exports.view = (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if(error) {
      console.log(error);
      return;
    } else {
      res.render('index', { users: results });
    }
  });
};

exports.find = (req, res) => {
  const { search } = req.body;
  connection.query("SELECT * FROM users WHERE name LIKE ?", ['%' + search + '%'], (error, results) => {
    if(error) {
      console.log(error);
      return;
    } else {
      res.render('index', { users: results });
    }
  });
};

exports.userDetails = (req, res) => {
  connection.query("SELECT * FROM users WHERE id = 2", (error, results) => {
    if(error) {
      console.log(error);
      return;
    } else {
      res.render('user', { user: results[0] });
    }
  });
};

exports.form = (req, res) => {
  res.render('addUser', { alert: '' });
}

exports.addUser = (req, res) => {
  const { name, email, phone } = req.body;
  connection.query("INSERT INTO users(name, email, birthDate) VALUES (?, ?, ?)", [name, email, phone], error => {
    if(error) {
      console.log(error);
      return;
    } else {
      res.render('addUser', { alert: 'Created successfully' });
    }
  });
}

