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
 * @return {TreeNode}
 */
var invertTree = function (tree) {
  if (tree === null) {
    return tree;
  }

  let temp = tree.left;

  tree.left = tree.right;
  tree.right = temp;

  invertTree(tree.left);
  invertTree(tree.right);

  return tree;
};
