// const http = require('http');
// const server = http.createServer((req, res) => { 
//   console.log(req)
// });
// server.listen(3000, 'localhost');

const fs = require('fs');
if (!fs.existsSync('./msg', (error) => console.log(error))) {
  fs.writeFile('./msg', (error) => console.log(error))
}

const http = require('http');
const server = http.createServer((req, res) => {
  console.log('request received')
});

server.listen(3000, 'localhost');
