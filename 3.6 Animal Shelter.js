// Implement an animal shelter where people must adopt the oldest animal, or select
// either the oldest dog or cat. Create the data structure to maintain this system
// and implement enqueue, dequeueAny, dequeueDog, dequeueCat

// This could be implemented as two separate lists with the a time stamp. I've implemented
// it as one list. Type will hold either cat or dog
class Node {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  // If there is nothing at the front of the queue, i.e. it's empty, add the
  // animal to the front.
  enqueue(name, type) {
    if (!this.front) {
      this.front = new Node(name, type);
      // Else travers the queue and add the animal to the end
    } else {
      let node = this.front;
      while (node.next != null) {
        node = node.next;
      }
      node.next = new Node(name, type);
    }
  }
  // By changing the front to the next in-line, the front of the queue is removed
  dequeueAny() {
    let temp = this.front;
    this.front = this.front.next;
    return temp;
  }
  // If the front of the queue is a dog, use dequeueAny
  dequeueDog() {
    if (this.front.type === 'dog') {
      this.dequeueAny();
      // Else traverse the queue until a dog is next, change where next is pointing to next.next
      // and return the dog. If there's no dog in the queue return false
    } else {
      let node = this.front;
      while (node.next != 'dog') {
        if (node.next === null) {
          return false;
        }
        node = node.next;
      }
      let temp = node.next;
      node.next = temp.next;
      return temp;
    }
  }
  // Works as dequeueDog above
  dequeueCat() {
    if (this.front.type === 'cat') {
      this.dequeueAny();
    } else {
      let node = this.front;
      while (node.next.type != 'cat') {
        if (node.next === null) {
          return false;
        }
        node = node.next;
      }
      let temp = node.next;
      node.next = temp.next;
      return temp;
    }
  }

  peek() {
    return this.front;
  }
}

// TEST
let shelter = new Queue();
shelter.enqueue('Charlie', 'dog');
shelter.enqueue('Harry', 'cat');
shelter.enqueue('Mary', 'cat');
shelter.enqueue('Rex', 'dog');

shelter.dequeueCat();
shelter.dequeueCat();

shelter.peek().name === 'Charlie' && shelter.peek().next.name === 'Rex'
  ? console.log('Test passed')
  : console.log('Test failed');

shelter.dequeueDog();

shelter.peek().name === 'Rex' && shelter.peek().next === null
  ? console.log('Test passed')
  : console.log('Test failed');
