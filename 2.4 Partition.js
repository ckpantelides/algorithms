// Partition a linked list around value x, so all nodes less than x come before all nodes
// greater than or equal to x. If x is within the list, x only needds to be after nodes less than x
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

// Partition a list around value x
function partition(list, x) {
  let head = null;
  let tail = null;

  // first traverse the list. Values smaller than x are attached to the head
  // values larger than x are attached to the tail
  let pointer = list.head;
  while (pointer != null) {
    if (pointer.data < x) {
      head = new Node(pointer.data, head);
    } else {
      tail = new Node(pointer.data, tail);
    }
    pointer = pointer.next;
  }

  // Traverse the head until its end, attach the tail to the end of the head
  // and return the result
  let pointer2 = head;
  while (pointer2 != null) {
    if (pointer2.next === null) {
      pointer2.next = tail;
      pointer2 = head;
      break;
    }
    pointer2 = pointer2.next;
  }
  return pointer2;
}

// Traverses a linked list and adds the data to a string (for testing purposes)
function returnList(list) {
  let result = '';
  let pointer = list;
  while (pointer !== null) {
    result += `${pointer.data} `;
    pointer = pointer.next;
  }
  return result;
}

/* TESTS */
let listA = new LinkedList();
listA.insertIterable([1, 10, 12, 4, 3, 8, 2, 1]);

let listB = new LinkedList();
listB.insertIterable([12, 30, 6, 7, 9, 13, 25, 60]);

let listC = new LinkedList();
listC.insertIterable([1, 2, 33, 84, 13, 5, 4]);

let partitionedListA = partition(listA, 4);
let partitionedListB = partition(listB, 10);
let partitionedListC = partition(listC, 6);

returnList(partitionedListA) === '1 2 3 1 8 4 12 10 '
  ? console.log('Test passed')
  : console.log('Test failed');

returnList(partitionedListB) === '9 7 6 60 25 13 30 12 '
  ? console.log('Test passed')
  : console.log('Test failed');

returnList(partitionedListC) === '4 5 2 1 13 84 33 '
  ? console.log('Test passed')
  : console.log('Test failed');
