//Describe a SetofStacks that creates a new Stack everytime a Stack reaches a
// certain limit. It should pop and push like a single Stack
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
    this.maxSize = 2;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    this.top = this.top.previous;
    this.size -= 1;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }

  isFull() {
    return this.size === this.maxSize;
  }
}

class SetofStacks {
  constructor() {
    this.NoOfStacks = 0;
    this.stackSet = [];
  }

  push(data) {
    if (this.NoOfStacks === 0) {
      this.stackSet[0] = new Stack();
      this.stackSet[0].push(data);
      this.NoOfStacks += 1;
    } else if (this.stackSet[this.NoOfStacks - 1].isFull()) {
      this.NoOfStacks += 1;
      this.stackSet[this.NoOfStacks - 1] = new Stack();
      this.stackSet[this.NoOfStacks - 1].push(data);
    } else {
      this.stackSet[this.NoOfStacks - 1].push(data);
    }
  }

  pop() {
    if (this.stackSet[this.NoOfStacks - 1].isEmpty()) {
      this.NoOfStacks -= 1;
      this.stackSet[this.NoOfStacks - 1].pop();
    } else {
      this.stackSet[this.NoOfStacks - 1].pop();
    }
  }

  peek() {
    if (this.stackSet[this.NoOfStacks - 1].isEmpty()) {
      this.NoOfStacks -= 1;
      return this.stackSet[this.NoOfStacks - 1].peek();
    } else {
      return this.stackSet[this.NoOfStacks - 1].peek();
    }
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let set = new SetofStacks();
set.push(1);
set.push(2);
set.push(3);
set.push(4);

// TESTS
set.peek().data === 4 && set.NoOfStacks === 2
  ? console.log('Test passed')
  : console.log('Test failed');
set.pop();
set.pop();
set.peek().data === 2 && set.NoOfStacks === 1
  ? console.log('Test passed')
  : console.log('Test failed');
