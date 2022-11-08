/**
 * @param {number} n
 * @return {number}
 */

// O(n) - space(call stack), O(2 ^ n) - time
// var fib = function(n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// };

// O(n) - time, O(1) - space

var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  let current = 0;
  let prev1 = 1;
  let prev2 = 0;

  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
};
