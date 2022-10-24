/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// O(n) - time, O(1) - space

var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  const pVal = p.val;
  const qVal = q.val;

  while (node) {
    const nodeVal = node.val;

    if (pVal > nodeVal && qVal > nodeVal) {
      node = node.right;
    } else if (pVal < nodeVal && qVal < nodeVal) {
      node = node.left;
    } else {
      return node;
    }
  }

  return null;
};
