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

// O(n) - time, O(1) - space
var middleNode = function(head) {
  let depth = 0;
  
  let curr = head;
  
  
  while (curr) {
      depth++;
      curr = curr.next;
  } 
  
  let middle = Math.trunc(depth / 2);
  
  curr = head;
  
  while (middle !== 0) {
      middle--;
      curr = curr.next;
  }
  
  return curr;
};

// Using two pointers (fast and slow)

// O(n) - time, O(1) - space

var middleNode = function(head) {
  slow = fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};