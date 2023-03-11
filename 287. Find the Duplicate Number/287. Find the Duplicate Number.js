/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) - time, O(n) - space
// function findDuplicate(array) {
//   let map = new Map();

//   let duplicate;

//   for (let i = 0; i < array.length; i++) {
//     if (map.has(array[i])) {
//       duplicate = array[i];
//       break;
//     } else {
//       map.set(array[i], 1);
//     }
//   }

//   return duplicate || -1;
// }

// O(n) - time, O(1) - space

var findDuplicate = function (array) {
  let duplicate;

  for (let i = 0; i < array.length; i++) {
    const index = Math.abs(array[i]) - 1;
    if (array[index] < 0) {
      duplicate = Math.abs(array[i]);
      break;
    } else {
      array[index] *= -1;
    }
  }
  return duplicate || -1;
};
