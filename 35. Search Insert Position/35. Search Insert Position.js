/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    }
  }

  return left;
};
