// Implement a queue via two stacks. Queues are first in first out, whereas Stacks pop the last
// node. When popping or peeking the queue, all nodes can be shifted to a second stack, where the
// first element will now be at the top
class Node {
  constructor(data, previous = null) {
    this.data = data;
    this.previous = previous;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    // Temp variable is needed for when we're shifting stacks in
    // the queue
    let temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.newestStack = new Stack();
    this.oldestStack = new Stack();
  }

  enqueue(data) {
    if (!this.oldestStack.isEmpty()) {
      this.shiftStacks();
      this.newestStack.push(data);
    } else {
      this.newestStack.push(data);
    }
  }

  dequeue() {
    if (this.oldestStack.isEmpty()) {
      this.shiftStacks();
      this.oldestStack.pop();
    } else {
      this.oldestStack.pop();
    }
  }

  peek() {
    if (this.oldestStack.isEmpty()) {
      this.shiftStacks();
      return this.oldestStack.peek();
    } else {
      return this.oldestStack.peek();
    }
  }

  shiftStacks() {
    if (this.oldestStack.isEmpty()) {
      while (!this.newestStack.isEmpty()) {
        this.oldestStack.push(this.newestStack.pop());
      }
    } else if (this.newestStack.isEmpty()) {
      while (!this.oldestStack.isEmpty()) {
        this.newestStack.push(this.newestStack.pop());
      }
    }
  }

  size() {
    return this.oldestStack.size + this.newestStack.size;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

// TESTS
queue.peek().data.data === 1 && queue.size() === 2
  ? console.log('Test passed')
  : console.log('Test failed');
queue.dequeue();
queue.peek().data.data === 2 && queue.size() === 1
  ? console.log('Test passed')
  : console.log('Test failed');
