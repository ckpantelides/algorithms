// Check to see if a linked list has a loop
function hasCycle(head) {
  let slow = head;
  let fast = head.next;
  while (fast.next != null) {
    if (slow == fast) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}
