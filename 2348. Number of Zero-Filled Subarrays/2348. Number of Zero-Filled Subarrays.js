/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let ans = 0;
  let subArrayCount = 0;

  for (num of nums) {
    if (num === 0) {
      subArrayCount++;
    } else {
      subArrayCount = 0;
    }

    ans += subArrayCount;
  }

  return ans;
};
