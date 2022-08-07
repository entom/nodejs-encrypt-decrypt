require('dotenv').config();
const crypter = require('./crypter');

const staticIv = crypter.generateRandomKey();
console.log('staticIv', staticIv);

const value = crypter.encrypt('entom');
console.log('value', value);
const value1 = crypter.encrypt('entom', staticIv);
console.log('value-1', value1);

console.log('value-1 decrypted', crypter.decrypt(value1, staticIv));
