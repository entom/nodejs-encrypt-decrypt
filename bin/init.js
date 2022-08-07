#!/usr/bin/env node

const fs = require('fs');
const crypter = require('../crypter');

const FILE_PATH = `${__dirname}/../../../../.env`;

const writeFileContent = (content) => {
  fs.writeFile(FILE_PATH, content, 'utf8', function (err) {
    if (err) console.log(err);
  });
}

fs.readFile(FILE_PATH, {encoding: 'utf8'}, function (err, data) {
  if (err !== null) {
    if (err.code === 'ENOENT') {
      const data = 'SECRET_KEY=' + crypter.generateRandomKey(true);
      writeFileContent(data);
    }
  } else {
    if (data.indexOf('SECRET_KEY=') === -1) {
      data += '\nSECRET_KEY=' + crypter.generateRandomKey(true);
      writeFileContent(data);
    }
  }
});
