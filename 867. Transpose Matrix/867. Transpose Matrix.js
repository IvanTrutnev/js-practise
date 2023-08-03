/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// O(M x N) - space, O(M x N) - time
var transpose = function (matrix) {
  const transposedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    //iterating by columns
    const newRow = [];

    for (let row = 0; row < matrix.length; row++) {
      // iterate throw rows by column index and push item to newRow
      newRow.push(matrix[row][col]);
    }

    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
};
