// Check whether a linked list is a palindrome
function palindrome(list) {
  // A palindrome is the same forwards and backwards. By saving the list in a
  // stack, we can traverse it in reverse order - as the stack holds the last element added at the top
  let reverseStack = new Stack();
  let node = list;
  // Push of the list node data into a stack
  while (node) {
    reverseStack.push(node.data);
    node = node.next;
  }
  let pointer1 = list;
  let pointer2 = reverseStack.top;
  // Traverse the list and the stack at the same time, comparing the data
  while (pointer1 || pointer2) {
    if (pointer1.data != pointer2.data) {
      return false;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.previous;
  }
  return true;
}

class StackNode {
  constructor(data, previous = null) {
    this.data = data;
    this.previous = previous;
  }
}

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let node = new StackNode(data);
    node.previous = this.top;
    this.top = node;
  }
}

// TESTS
let testList1 = new ListNode(2);
let a = new ListNode(8);
let b = new ListNode(3);
let c = new ListNode(8);
let d = new ListNode(2);

let testList2 = new ListNode(2);
let e = new ListNode(8);
let f = new ListNode(3);
let g = new ListNode(7);
let h = new ListNode(8);
let i = new ListNode(2);

testList1.next = a;
a.next = b;
b.next = c;
c.next = d;

testList2.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

palindrome(testList1) === true
  ? console.log('Test passed')
  : console.log('Test failed');
palindrome(testList2) === false
  ? console.log('Test passed')
  : console.log('Test failed');
