/**
 * @param {number} n
 * @return {number}
 */

// Time complexity - n * log(n) using Sieve of Eratosthenes.
var countPrimes = function (n) {
  if (n < 3) {
    return 0;
  }

  let nums = Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (nums[i] === true) {
      for (let j = 2; j * i < n; j++) {
        nums[j * i] = false;
      }
    }
  }

  return nums.filter((i) => i === true).length - 2;
};

// const isPrime = (n) => {
//     let result = true;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             result = false;
//             break;
//         }
//     }

//     return result;
// }

// var countPrimes = function(n) {
//     let primes = [];

//     for (let i = 2; i <= n - 1; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     return primes.length;
// };
