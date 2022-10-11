/**
 * @param {string} s
 * @return {number}
 */

// O(n) - time, O(n) - space, as if alphabet has fixed size we could say O(1) - space
var longestPalindrome = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  let length = 0;
  let middleLetter;

  for (let [key, value] of map) {
    if (value % 2 && !middleLetter) {
      middleLetter = key;
      length += value;
    } else if (Math.trunc(value / 2)) {
      length += Math.trunc(value / 2) * 2;
    }
  }

  return length;
};
