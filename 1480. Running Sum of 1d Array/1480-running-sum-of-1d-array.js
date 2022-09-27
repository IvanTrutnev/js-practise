/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) - time, O(n) - space
// var runningSum = function(nums) {
//     let prevSum = 0;
//     let result = [];

//     for (let i = 0; i < nums.length; i++) {
//         result.push(prevSum + nums[i]);
//         prevSum += nums[i];
//     }

//     return result;
// };

// O(n) - time, O(1) - space

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
};
