/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// O(n*log(n)) - time because of sorting, O(n) - space

var merge = function (array) {
  array.sort((a, b) => a[0] - b[0]);

  const newArray = [array[0]];

  for (let i = 1; i < array.length; i++) {
    const [start, end] = array[i];

    const lastInterval = newArray[newArray.length - 1];

    if (start > lastInterval[1]) {
      newArray.push([start, end]);
    } else {
      lastInterval[1] = Math.max(end, lastInterval[1]);
    }
  }

  return newArray;
};
