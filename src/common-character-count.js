const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const counts = [...s1].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return [...s2].reduce((common, char) => {
    if (counts[char] > 0) {
      counts[char]--;
      return common + 1;
    }
    return common;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
