/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let bitsNumber = 0;

  for (let i = 0; i < 32; i++) {
    if (n & (1 === 1)) {
      bitsNumber++;
    }
    n = n / 2; // n = n >> 1;
  }

  return bitsNumber;
};
