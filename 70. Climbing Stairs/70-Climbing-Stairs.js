/**
 * @param {number} n
 * @return {number}
 */

// Brute force, O(n) - space (depth of recursion), O(2 ^ n) - time  

// function helper(currentStep, n) {
//     if (currentStep > n) {
//         return 0;
//     }

//     if (currentStep === n) {
//         return 1;
//     }

//     return helper(currentStep + 1, n) + helper(currentStep + 2, n);
// }

// var climbStairs = function(n) {
//     return helper(0, n);
// };


//O(n) - time, O(1) - space
var climbStairs = function(n) {
  if (n === 1) {
      return 1;
  }

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
  }

  return second;
};

