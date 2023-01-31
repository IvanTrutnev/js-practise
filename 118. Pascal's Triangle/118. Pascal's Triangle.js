/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = new Array();

  triangle[0] = [1];

  for (let i = 1; i < numRows; i++) {
    const row = new Array();
    const prevRow = triangle[i - 1];

    row[0] = 1;

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
