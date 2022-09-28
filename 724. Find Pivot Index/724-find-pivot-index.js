/**
 * @param {number[]} nums
 * @return {number}
 */

// [1,7,3,6,5,6] -> sum = 28

// right elements sum equal to sum - leftSum - currentElement

// O(n) - time, O(n) - space

var pivotIndex = function (nums) {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (sum - leftSum - nums[i] === leftSum) return i;

    leftSum += nums[i];
  }

  return -1;
};
