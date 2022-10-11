/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) - time, O(n) - space

var detectCycle = function (head) {
  const nodesSet = new Set();

  while (head) {
    if (nodesSet.has(head)) {
      return head;
    }
    nodesSet.add(head);
    head = head.next;
  }

  return null;
};
