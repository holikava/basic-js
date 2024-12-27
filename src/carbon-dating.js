const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!Number(sampleActivity) || typeof sampleActivity !== 'string') {
    return false;
  }

  const lifeIndex = 0.693 / HALF_LIFE_PERIOD;
  const sampleNum = Number(sampleActivity);

  if (sampleNum <= 0 || sampleNum > 2024) return false;

  const result = Math.log(MODERN_ACTIVITY / sampleNum) / lifeIndex;
  return result > 0 ? Math.ceil(result) : false;
}

module.exports = {
  dateSample
};
