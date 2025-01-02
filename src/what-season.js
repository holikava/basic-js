const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  const getMonth = date.getMonth();
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  const winter = [11, 0, 1];

  if (spring.includes(getMonth)) {
    return "spring";
  } else if (summer.includes(getMonth)) {
    return "summer";
  } else if (autumn.includes(getMonth)) {
    return "autumn";
  } else {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
