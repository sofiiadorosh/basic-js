const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }

  process(message, key, direction) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    const result = [...message.toUpperCase()].map((char) => {
      const code = char.charCodeAt(0) - 65;

      if (code < 0 || code > 25) return char;

      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - 65;
      keyIndex += 1;

      return String.fromCharCode(((code + direction * shift + 26) % 26) + 65);
    });

    return (this.isDirect ? result : result.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
