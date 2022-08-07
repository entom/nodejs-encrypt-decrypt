# nodejs-encrypt-decrypt
Nodejs app - encrypt and decrypt data

Initiate module
```
npx @entom/node-encrypt-decrypt init
```

Example of usage - without static value of iv
```
require('dotenv').config();
const crypter = require('./crypter');

const value = crypter.encrypt('entom');
console.log('value', value);

const value1 = crypter.encrypt('entom');
console.log('value-1', value1);
```

Example of usage - with static value of iv
```
require('dotenv').config();
const crypter = require('./crypter');
const staticIv = crypter.generateRandomKey();

const value = crypter.encrypt('entom', staticIv);
console.log('value', value);

const value1 = crypter.encrypt('entom', staticIv);
console.log('value-1', value1);
console.log('value-1 decrypted', crypter.decrypt(value1, staticIv));
```
