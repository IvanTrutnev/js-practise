/**
 * @param {string} s
 * @return {number}
 */

// s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  let i = s.length - 1;

  while (i >= 0) {
    const symbol = s[i];
    const prevSymbol = s[i - 1] || Infinity;
    let addedValue = map[symbol];

    if (map[symbol] > map[prevSymbol]) {
      result += addedValue - map[prevSymbol];
      i -= 2;
    } else {
      result += addedValue;
      i--;
    }
  }

  return result;
};
