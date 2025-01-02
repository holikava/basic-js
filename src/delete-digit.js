const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let current = [...arr];
    current.splice(i, 1);
    let num = Number(current.join(''));
    if (num > result) result = num;
  }
  return result;
}

module.exports = {
  deleteDigit,
};
