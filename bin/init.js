const fs = require('fs');
const crypter = require('../crypter');

const FILE_PATH = `${__dirname}/../.env`;

fs.readFile(FILE_PATH, {encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
  if (data.indexOf('SECRET_KEY=') === -1) {
    data += '\nSECRET_KEY=' + crypter.generateRandomKey();
    fs.writeFile(FILE_PATH, data, 'utf8', function (err) {
      if (err) console.log(err);
    });
  }
});

console.log('init -- end');
