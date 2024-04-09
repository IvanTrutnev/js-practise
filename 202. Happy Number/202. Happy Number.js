/**
 * @param {number} n
 * @return {boolean}
 */

// 14 -> 1 + 16 = 17 => 1 + 49 = 50 => 25 + 0 => 4 + 25 = 49

// 11 -> 1 + 1 = 2 = 4 => 16 + 0 = 16 => 1 + 36 = 37 => 9 + 49 = 58 => ...

//

var isHappy = function (n) {
  while (true) {
    n = String(n)
      .split('')
      .reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);

    if (n < 10) {
      return n === 1 || n === 7;
    }
  }
};
