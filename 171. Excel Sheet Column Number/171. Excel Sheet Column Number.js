/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  const titleLength = columnTitle.length;

  for (let i = 0; i < titleLength; i++) {
    result +=
      (columnTitle.charCodeAt(i) - 64) * Math.pow(26, titleLength - i - 1); // we need offset 64 in ascii coding,  in ASCII 65 - A, 66 - B etc
  }

  return result;
};
