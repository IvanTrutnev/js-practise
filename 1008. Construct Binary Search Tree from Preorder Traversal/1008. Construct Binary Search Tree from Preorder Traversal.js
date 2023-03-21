/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const values = preorder;

  let root = new TreeNode(values[0]);
  let stack = [root];
  let prev = root;

  for (let i = 1; i < values.length; i++) {
    const newNode = new TreeNode(values[i]);

    while (stack.length && stack[stack.length - 1].val <= newNode.val) {
      prev = stack.pop();
    }

    if (prev.val > newNode.val) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }

    stack.push(newNode);
    prev = newNode;
  }

  return root;
};
