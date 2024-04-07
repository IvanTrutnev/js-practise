/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let right = s.length - 1;

  while (s[right] === ' ') {
    right--;
  }

  let left = right;

  while (left >= 0 && s[left] !== ' ') {
    left--;
  }

  return right - left;
};
