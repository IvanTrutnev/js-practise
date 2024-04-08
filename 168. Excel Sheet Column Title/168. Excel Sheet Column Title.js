/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber) {
    let remainder = columnNumber % 26;
    let quotient = (columnNumber - remainder) / 26;

    if (remainder === 0) {
      remainder = 26;
      quotient--;
    }

    result = String.fromCharCode(64 + remainder) + result;

    columnNumber = quotient;
  }

  return result;
};
