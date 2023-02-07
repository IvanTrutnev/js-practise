/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Time complexity: O(N)

// Space complexity: O(log⁡N)

var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

const helper = function (nums, left, right) {
  if (left > right) return null;

  const middle = Math.floor((left + right) / 2);

  const root = new TreeNode(nums[middle]);

  root.left = helper(nums, left, middle - 1);
  root.right = helper(nums, middle + 1, right);
  return root;
};
