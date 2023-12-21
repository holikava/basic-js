const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ( !Array.isArray(arr)) {
    return `'arr' parameter must be an instance of the Array!`;
  }

  let newArr = Array.from(arr);
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  for (let i = 0; i < newArr.length; i += 1) {
    let index = i;
    if (newArr[i] === discardNext) {
      newArr.splice(index, 2);
    }
    if (newArr[i] === discardPrev) {
      newArr.splice(index - 1, 2);
    }
    if (newArr[i] === doubleNext) {
      newArr.splice(index, 1, newArr[index + 1]);
    }
    if (newArr[i] === doublePrev) {
      newArr.splice(index, 1, newArr[index - 1]);
    }
  }

  return newArr;
}

module.exports = {
  transform
};
