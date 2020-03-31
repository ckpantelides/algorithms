// Removed duplicates from an unsorted linked list
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

function removeDups(list) {
  if (!list.head) return null;

  let uniqueSet = new Set();
  let node = list.head;
  while (node) {
    uniqueSet.add(node.data);
    node = node.next;
  }
  let uniqueList = new LinkedList();
  uniqueList.insertIterable(uniqueSet);
  return uniqueList;
}

let listA = new LinkedList();
listA.insertIterable(['hello', 'there', 'there', 'hello', 'bye']);

let listB = new LinkedList();
listB.insertIterable(['yes', 'yes', 'no', 'maybe']);

let listC = new LinkedList();
listC.insertIterable([
  'japan',
  'spain',
  'hungary',
  'england',
  'england',
  'spain',
  'france'
]);

//TESTS
let testA = removeDups(listA);
let testB = removeDups(listB);
let testC = removeDups(listC);

testA.size() === 3 && testA.head.next.next.data === 'bye'
  ? console.log('Test passed')
  : console.log('Test failed');

testB.size() === 3 && testB.head.next.next.data === 'maybe'
  ? console.log('Test passed')
  : console.log('Test failed');

testC.size() === 5 && testC.head.next.next.next.data === 'england'
  ? console.log('Test passed')
  : console.log('Test failed');
