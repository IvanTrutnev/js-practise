/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let gas = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    gas = Math.max(gas - 1, nums[i]);

    if (gas === 0) {
      return false;
    }
  }

  return true;
};
