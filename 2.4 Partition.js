// Partiion a linked list around value x, so all nodes less than x come before all nodes
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

function partition(list, x) {
  let head = new Node(null);
  let tail = new Node(null);

  list = list.head;
  while (list != null) {
    if (list.data < x) {
      head = new Node(list.data, head);
    } else {
      tail = new Node(list.data, tail);
    }
    list = list.next;
  }
  head = new Node(head, tail);

  return head;
}

/*
function returnList(list) {
  let result = '';
  while (list) {
    result += list.data;
    list = list.next;
  }
  return result;
}
*/
let listA = new LinkedList();
listA.insertIterable([1, 10, 12, 4, 3, 8, 2, 1]);

let b = partition(listA, 4);
//printList(b);
/*
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
*/
