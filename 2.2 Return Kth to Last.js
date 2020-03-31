// Return Kth to last element of an unsorted linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeTail() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertTail(data) {
    const last = this.getTail();
    if (last) last.next = new Node(data);
    else this.head = new Node(data);
  }

  insertIterable(array) {
    array.forEach(value => this.insertTail(value));
  }
}

function kthToLast(list, k) {
  if (!list.head) return null;

  let pointer1 = list.head;
  let pointer2 = list.head;

  // Move pointer1 k nodes into the linked list
  for (let i = 0; i < k; i++) {
    if (pointer1 === null) return null;
    pointer1 = pointer1.next;
  }

  // When pointer1 reaches the end i.e. null, pointer2 will
  // be k nodes from the end
  while (pointer1 != null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer2;
}

let listA = new LinkedList();
listA.insertIterable(['hello', 'there', 'hello', 'bye']);

let listB = new LinkedList();
listB.insertIterable(['yes', 'no', 'maybe', 'of course']);

let listC = new LinkedList();
listC.insertIterable(['japan', 'spain', 'hungary', 'england', 'france']);

//TESTS
kthToLast(listA, 4).data === 'hello'
  ? console.log('Test passed')
  : console.log('Test failed');

kthToLast(listB, 1).data === 'of course'
  ? console.log('Test passed')
  : console.log('Test failed');

kthToLast(listC, 5).data === 'japan'
  ? console.log('Test passed')
  : console.log('Test failed');
