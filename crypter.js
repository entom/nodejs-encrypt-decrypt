const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const generateRandomKey = (asString = false) => {
  const result = crypto.randomBytes(16);
  return !asString ? result : result.toString('hex');
}

const secretKey = process.env.SECRET_KEY || generateRandomKey(true);

const encrypt = (text, iv = null) => {
  if (iv === null) {
    iv = crypto.randomBytes(16);
  }
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: typeof iv === 'string' ? iv : iv.toString('hex'),
    content: encrypted.toString('hex')
  };
};

const decrypt = (hash, iv = null) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv !== null ? iv : hash.iv, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

  return decrypted.toString();
};

module.exports = {
  generateRandomKey,
  encrypt,
  decrypt
};
