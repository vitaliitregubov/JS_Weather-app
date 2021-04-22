// const fs = require('fs');

// fs.readFile('./blog.txt', (error, data) => {
//   if (error) console.log('no such file')
//   console.log(data.toString())
// })

// fs.writeFile('./blog1.txt', 'hello world', () => {
//   console.log('the file has been changed!')
// });

// fs.readFile('./blog.txt', (err, data) => {
//   if(err) console.log(err);
//   console.log(data.toString());
// })
// const arr = ['first', 'second', 'third']

// // for (const num of arr) {
// //   fs.mkdir(`./directory_${num}`, error => console.log(error))
// // }

// for (const num of arr) {
//   if(fs.existsSync(`./directory_${num}`)) {
//     fs.rmdir(`./directory_${num}`, (error) => console.log(error));
//     console.log('deleted successfully!')
//   }
// }


// const fs = require('fs');

// const stream = fs.createReadStream('./blog.txt', { encoding: 'utf-8'})

// stream.on('data', (chunk) => {
//   console.log(chunk)
// })

const fs = require('fs');
const writeStream = fs.createWriteStream('./blogs.txt', { encoding: 'utf-8' });
const readStream = fs.createReadStream('./blog.txt', { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
  writeStream.write('--------------CHUNK---------------')
  writeStream.write(chunk)
}) 

