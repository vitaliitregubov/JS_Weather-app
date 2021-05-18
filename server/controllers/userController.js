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



