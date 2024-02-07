/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let markedElements = new Set();
  let operations = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= k) {
      markedElements.add(nums[i]);
    }

    operations++;

    if (markedElements.size === k) {
      return operations;
    }
  }

  return undefined;
};
