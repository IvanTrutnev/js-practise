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
 * @return {number}
 */

// Time Complexity - O(n), Space Complexity - O(n) as call stack of recursion

var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let leftDepth = 1 + minDepth(root.left);
  let rightDepth = 1 + minDepth(root.right);

  if (!root.left) {
    return rightDepth;
  }

  if (!root.right) {
    return leftDepth;
  }

  return Math.min(leftDepth, rightDepth);
};
