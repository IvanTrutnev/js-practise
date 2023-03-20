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
 * @param {number} k
 * @return {number}
 */

// Time - O(h + k), Space - O(h) , whre h - is height of tree
var kthSmallest = function (tree, k) {
  let smallest = -1;

  function inorderTraversal(tree) {
    if (!tree) {
      return;
    }

    inorderTraversal(tree.left);

    if (k === 0) {
      return;
    }

    smallest = tree.val;
    k--;

    inorderTraversal(tree.right);
  }

  inorderTraversal(tree);
  return smallest;
};
