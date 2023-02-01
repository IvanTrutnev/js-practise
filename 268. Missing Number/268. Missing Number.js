/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const numsCounts = nums.length;

  const sum = nums.reduce((acc, item) => acc + item, 0);

  let expectedSum = 0;

  for (let i = 0; i <= numsCounts; i++) {
    expectedSum += i;
  }

  return expectedSum - sum;
};
