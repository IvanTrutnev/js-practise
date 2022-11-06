/**
 * @param {character[][]} grid
 * @return {number}
 */

// Dfs solution

function dfs(grid, i, j) {
  if (
    j < 0 ||
    j >= grid[0].length ||
    i < 0 ||
    i >= grid.length ||
    grid[i][j] === '0'
  ) {
    return 0;
  }

  grid[i][j] = '0';

  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);

  return 1;
}

// O(m x n) - time, O(m x n) - space

var numIslands = function (grid) {
  let islandsCount = 0;

  const rowsCount = grid.length;
  const colsCount = grid[0].length;

  for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
    for (let colIndex = 0; colIndex < colsCount; colIndex++) {
      if (grid[rowIndex][colIndex] === '1') {
        islandsCount += dfs(grid, rowIndex, colIndex);
      }
    }
  }

  return islandsCount;
};
