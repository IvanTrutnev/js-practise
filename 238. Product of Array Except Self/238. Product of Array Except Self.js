/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(3n) - space, O(3n) - time
// function productExceptSelf(array) {
//   let products = [];
//   let leftArray = [];
//   let rightArray = [];

//   let product = 1;

//   for (let i = 0 ; i < array.length; i++) {
//     leftArray.push(product);
//     product *= array[i];
//   }

//   product = 1;

//   for (let i = array.length - 1; i >= 0; i --) {
//     rightArray[i] = product;
//     product *= array[i];
//   }

//   for (let i = 0; i < array.length; i++) {
//     products.push(leftArray[i] * rightArray[i]);
//   }

//   return products;
// }

// O(n) - space, O(n) - time
function productExceptSelf(array) {
  let products = [];

  let product = 1;

  for (let i = 0; i < array.length; i++) {
    products.push(product);
    product *= array[i];
  }

  product = 1;

  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= product;
    product *= array[i];
  }

  return products;
}
