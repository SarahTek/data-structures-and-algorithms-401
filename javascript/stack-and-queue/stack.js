'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }


  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty != null) {
      let banana = this.top;
      this.top = banana.next;
      return banana;
    } else {
      return null;
    }
  }


  isEmpty() {
    return (this.top === null);
  }
}
