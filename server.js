const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let returnedPage;
  switch (req.url) {
    case '/':
      returnedPage = 'index.html';
      break;
    case '/about':
      returnedPage = 'about.html';
      break;
    default:
      returnedPage = 'index.html';
      break;
  }

  res.setHeader('Content-Type', 'text/html');
  fs.readFile(`./views/${returnedPage}`, (error, data) => {
    res.end(data);
  })
});

server.listen(3000, 'localhost');

