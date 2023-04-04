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
 * @return {boolean}
 */

function getHeight(tree, height = 0, res) {
  if (!tree) return height;

  const leftHeight = getHeight(tree.left, height + 1, res);
  const rightHeight = getHeight(tree.right, height + 1, res);

  if (Math.abs(leftHeight - rightHeight) > 1) return (res.balanced = false);

  return Math.max(leftHeight, rightHeight);
}

var isBalanced = function (root) {
  let res = { balanced: true };
  getHeight(root, 0, res);
  return res.balanced;
};
