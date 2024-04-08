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

// Recursive

var postorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }

  traverse(root);

  return result;
};

//Iteration

var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack[stack.length - 1];

    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else {
      result.push(stack.pop().val);
    }
  }

  return result;
};
