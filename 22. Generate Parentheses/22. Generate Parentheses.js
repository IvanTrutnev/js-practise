/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const result = [];

  function backtracking(s, openedCount, closedCount) {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }

    if (openedCount < n) {
      backtracking(s + '(', openedCount + 1, closedCount);
    }

    if (openedCount > closedCount) {
      backtracking(s + ')', openedCount, closedCount + 1);
    }
  }

  backtracking('', 0, 0);

  return result;
};
