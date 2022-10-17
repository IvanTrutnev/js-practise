/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(log n) - time, O(1) - space

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.trunc((end + start) / 2);

    if (target === nums[middle]) {
      return middle;
    }

    if (target > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};
