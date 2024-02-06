/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummyHead = new ListNode(0);

  dummyHead.next = head;

  let current = dummyHead;

  while (current.next && current.next.next) {
    let node1 = current.next;
    let node2 = current.next.next;

    current.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    current = current.next.next;
  }

  return dummyHead.next;
};
