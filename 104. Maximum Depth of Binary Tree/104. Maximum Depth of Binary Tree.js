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

const helper = function (node, count) {
  if (node === null) {
    return count;
  }

  count++;

  return Math.max(helper(node.left, count), helper(node.right, count));
};

var maxDepth = function (root) {
  return helper(root, 0);
};
