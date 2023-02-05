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
 * @return {number[]}
 */

// Recursive approach
// Time complexity: O(n)
// Space complexity: O(n)

const helper = function (node, res) {
  if (node) {
    helper(node.left, res);
    res.push(node.val);
    helper(node.right, res);
  }
};

// var inorderTraversal = function(root) {
//     const result = [];

//     helper(root, result);

//     return result;
// };

// Time complexity: O(n)

// Space complexity: O(n)

var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
};
