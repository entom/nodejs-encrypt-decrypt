const crypter = require('./crypter');

class Result {
  constructor(iv, content) {
    this.iv = iv;
    this.content = content;
  }
}

test('encrypt string value should return object', () => {
  expect(crypter.encrypt('entom')).toBeInstanceOf(Object);
});

test('typeof iv from encrypt method should be string', () => {
  expect(typeof crypter.encrypt('entom').iv).toBe('string');
});

test('typeof content from encrypt method should be string', () => {
  expect(typeof crypter.encrypt('entom').content).toBe('string');
});

test('encrypted input should be equal to decrypted value', () => {
  const inputValue = 'entom';
  const staticIv = crypter.generateRandomKey();
  const encrypted = crypter.encrypt(inputValue, staticIv);
  const decrypted = crypter.decrypt(encrypted, staticIv);
  expect(inputValue).toBe(crypter.decrypt(encrypted, encrypted.iv));
});
