require('dotenv').config();
const crypter = require('./crypter');
const crypto = require('crypto');

const staticIv = crypto.randomBytes(16);
console.log('staticIv', staticIv.toString('hex'));

const value = crypter.encrypt('entom');
console.log('value', value);
const value1 = crypter.encrypt('entom');
console.log('value-1', value1);

const value2 = crypter.encrypt('entom', staticIv);
console.log('value-2', value2);
const value3 = crypter.encrypt('entom', staticIv);
console.log('value-3', value3);

console.log('decrypted', crypter.decrypt(value));
