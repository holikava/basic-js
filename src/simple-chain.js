const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
let chain = [];
const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (value === false) {
      value = String(value);
    }
    if (value === null) {
      value = String(value);
    }
    if (value === undefined) {
      value = String(value);
    }
    if (value === NaN) {
      value = String(value);
    }

    if (!value) {
      chain.push(`( )`);
      return this;
    } else {
      chain.push(`( ${value.toString()} )`);
      return this;
    }
  },
  removeLink(position) {
    if (!position || position < 0 || position > chainMaker.getLength()) {
      throw new Error('You can\'t remove incorrect link!');
    }
    chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    let newStr = chain.join('~~');
    return newStr;
  }
};

module.exports = {
  chainMaker
};
