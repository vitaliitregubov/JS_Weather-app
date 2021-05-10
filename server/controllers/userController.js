const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 
});

exports.view = (req, res) => {
  pool.getConnection((error, connection) => {
    if(error) {
      console.log(error);
      return;
    }
    console.log('connected to a DB');

    connection.query('SELECT * FROM users', (error, rows) => {
      connection.release();

      if(error) {
        console.log(error);
        return;
      }

      res.render('index', { title: 'Home', users: rows });
    })
  });
}

exports.viewSingleUser = (req, res) => {
  pool.getConnection((error, connection) => {
    if(error) {
      console.log(error);
      return;
    }

    connection.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (error, data) => {
      if(error) {
        console.log(error);
        return;
      }

      res.render('user', { title: 'Home', user: data[0] });
    })
  })
}

exports.find = (req, res) => {
  const searchFilter = req.body.search;

  pool.getConnection((error, connection) => {
    if(error) {
      console.log(error);
      return;
    }

    connection.query(`SELECT * FROM users WHERE name LIKE ? OR email LIKE ?`, ['%' + searchFilter + '%', '%' + searchFilter + '%'], (error, data) => {
      if(error) {
        console.log(error);
        return;
      }

      res.render('index', { title: 'Home', users: data });
    })
  })
}

exports.form = (req, res) => {
  const { name, email, phone } = req.body;

  pool.getConnection((error, connection) => {
    if(error) return;

    connection.query(`
      INSERT INTO users SET name = ?, email = ?, birthDate = ?`, [name, email, phone], () => {
        connection.release();


      })
  })
}

