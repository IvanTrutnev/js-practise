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
var diameterOfBinaryTree = function (tree) {
  let diameter = 0;

  function getDiameter(node) {
    if (node === null) {
      return 0;
    }

    const left = getDiameter(node.left);
    const right = getDiameter(node.right);

    diameter = Math.max(left + right, diameter);
    return 1 + Math.max(left, right);
  }

  getDiameter(tree);

  return diameter;
};
