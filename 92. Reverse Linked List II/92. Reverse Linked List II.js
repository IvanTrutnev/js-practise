/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pointer = 1;
  let currNode = head;
  let start = head;

  while (pointer < left) {
    // here our goal to find left - 1 to know which element we should connect with reversed part
    start = currNode;
    pointer++;
    currNode = currNode.next;
  }

  let tail = currNode; // tail will be node by position left
  let newList = null; // to save reversed part

  while (pointer >= left && pointer <= right) {
    let next = currNode.next;
    currNode.next = newList;
    newList = currNode;
    currNode = next;
    pointer++;
  }

  start.next = newList; // connect our start node with new reversed list
  tail.next = currNode; // connect last element in reversed list with rest part of original list

  if (left === 1) {
    // when left === 1 we can't return head because node will be different
    return newList;
  } else {
    return head;
  }
};
