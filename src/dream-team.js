const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameTeam = '';
  let nameSrting = '';
  const onlyString = [];

  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      nameSrting = members[i].trim();
      onlyString.push(nameSrting[0]);
    }
  }

  if (onlyString.length === 0) {
    return false;
  }

  nameTeam = onlyString.sort().join('').toUpperCase();
  return nameTeam;
}

module.exports = {
  createDreamTeam
};
