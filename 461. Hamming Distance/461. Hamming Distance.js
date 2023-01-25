/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const xOR = x ^ y; // 1 ^ 4 = 5 -> 0001 & 0100 ->  0101 -> 5;
  return hammingWeight(xOR);
};

var hammingWeight = function (n) {
  let bitsNumber = 0;

  for (let i = 0; i < 32; i++) {
    if (n & (1 === 1)) {
      // check common bits with 1
      bitsNumber++;
    }
    n = n / 2; // n = n >> 1;
  }

  return bitsNumber;
};
