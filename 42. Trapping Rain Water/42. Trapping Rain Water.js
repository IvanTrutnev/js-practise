/**
 * @param {number[]} height
 * @return {number}
 */

//brute force O(N2) - time
// var trap = function(height) {
//     let totalWater = 0;

//     for (let p = 0; p < height.length; p++) {
//         let leftP = p;
//         let rightP = p;
//         let leftMax = 0;
//         let rightMax = 0;

//         while (leftP >= 0) {
//             leftMax = Math.max(leftMax, height[leftP]);
//             leftP--;
//         }

//         while (rightP < height.length) {
//             rightMax = Math.max(rightMax, height[rightP]);
//             rightP++;
//         }

//         const currentWater = Math.min(leftMax, rightMax) - height[p];

//         if (currentWater >= 0) {
//             totalWater += currentWater;
//         }
//     }

//     return totalWater;
// };

// optimal using 2 pointers
// O(n) - time, O(1) - space

var trap = function (height) {
  let totalWater = 0;

  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < maxLeft) {
        totalWater += maxLeft - height[left];
      } else {
        maxLeft = height[left];
      }

      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }

      right--;
    }
  }

  return totalWater;
};
