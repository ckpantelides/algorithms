// Insert a node at the desired position and return the head node

function insertNodeAtPosition(head, data, position) {
  let counter = 0;
  let pointer = head;

  while (counter < position - 1) {
    pointer = pointer.next;
    counter++;
  }
  let temp = pointer.next;
  pointer.next = new SinglyLinkedListNode(data);
  pointer.next.next = temp;
  return head;
}
