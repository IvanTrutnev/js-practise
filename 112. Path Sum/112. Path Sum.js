/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sums = [];

  function helper(node, currentSum = 0) {
    if (!node) return;

    currentSum += node.val;

    if (!node.left && !node.right) {
      sums.push(currentSum);
    }

    helper(node.left, currentSum);
    helper(node.right, currentSum);
  }

  helper(root, 0);

  return sums.includes(targetSum);
};
