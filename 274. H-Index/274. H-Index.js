/**
 * @param {number[]} citations
 * @return {number}
 */

//[3,0,6,1,4,4,5]
var hIndex = function (citations) {
  citations.sort((a, b) => b - a); // [6,5,4,4,4,3,1,0]

  let k = 0;

  while (citations[k] > k) {
    k++;
  }

  return k;
};
