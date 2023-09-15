/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  // if (!head) {
  //     return head;
  // }

  let currNode = head;

  while (currNode) {
    if (!currNode.child) {
      currNode = currNode.next;
    } else {
      let tail = currNode.child;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = currNode.next;
      if (tail.next) {
        tail.next.prev = tail;
      }
      currNode.next = currNode.child;
      currNode.next.prev = currNode;
      currNode.child = null;
    }
  }

  return head;
};
