// Two numbers are represented by a linked list. Each node contains a single digit. The digits are
// stores in reverse order - the 1's digit is at the head. Add the two numbers and return the sum
// as a linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function sumLists(list1, list2, carry, result) {
  // Base & terminal case
  if (list1 === null && (list2 === null) & (carry === null)) {
    return result;
  }

  let value = 0;
  // Each result node holds a single digit. Carry therefore holds any digit we're carrying
  // from the previous nodes' addition
  if (carry) {
    value += carry;
  }
  if (list1) {
    value += list1.data;
  }
  if (list2) {
    value += list2.data;
  }
  // Data is the value of the result node. If the addition of the list1&2 nodes plus the
  // carry is more than 9, data will be mod 10, and we'll carry over the 1 digit
  let data = value >= 10 ? value % 10 : value;

  // Traverse the result linked list to find the tail and add the node, or create the result
  // linked list if it doesn't exist
  if (result) {
    let pointer = result;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = new Node(data);
  } else {
    result = new Node(data);
  }

  // If the value of list1 + list2 plus the carry is more than 9, carry the 1 to the next
  // addition of nodes
  value >= 10 ? (carry = 1) : (carry = null);

  // Recurse
  return sumLists(
    list1 ? list1.next : null,
    list2 ? list2.next : null,
    carry,
    result
  );
}

let a = new Node(2);
let b = new Node(8);
let c = new Node(3);
let other = new Node(3);

let d = new Node(5);
let e = new Node(6);
let f = new Node(2);

a.next = b;
b.next = c;
c.next = other;

d.next = e;
e.next = f;

console.log(sumLists(a, d, null, null).next);
