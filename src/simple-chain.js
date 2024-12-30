const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  addLink(value) {
    if (!value && value !== '') {
      value = String(value);
    }
    value === '' ? this.chain.push(`( )`) : this.chain.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1] || isNaN(position)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  getLength() {
    return this.chain.length;
  },
  finishChain() {
    let finishChain = this.chain.join('~~');
    this.chain = [];
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
