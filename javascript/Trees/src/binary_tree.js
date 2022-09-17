
class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    let elements = [];
    if (this.root === undefined) {
      throw new Error('binary tree is empty');
    }
    function traverse(root) {
      elements.push(root.value);
      if (root.left) {
        traverse(root.left);
      }
      if (root.right) {
        traverse(root.right);
      }
    }
    traverse(this.root);
    return elements;
  }
  inOrder() {
    let elements = [];
    if (this.root === undefined) {
      throw new Error('binary tree is empty');
    }
    function traverse(root) {
      if (root.left) {
        traverse(root.left);
      }
      elements.push(root.value);
      if (root.right) {
        traverse(root.right);
      }
    }
    traverse(this.root);
    return elements;
  }
  postOrder() {
    let elements = [];
    if (this.root === undefined) {
      throw new Error('binary tree is empty');
    }
    function traverse(root) {
      if (root.left) {
        traverse(root.left);
      }
      if (root.right) {
        traverse(root.right);
      }
      elements.push(root.value);
    }
    traverse(this.root);
    return elements;
  }
  bfs() {
    let result = [];
    let queue = [];
    if (this.root === undefined) {
      throw new Error('tree is empty');
    }
    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  max() {
    if (this.root === undefined) {
      throw new Error('empty binary tree');
    }
    let queue = [];
    let maxValue = Number.MIN_SAFE_INTEGER;
    // let maxValue = 0;
    queue.push(this.root);
    while (queue.length !== 0) {
      let front = queue.shift();
      if (front.value > maxValue) {
        maxValue = front.value;
      }
      if (front.left !== undefined) {
        queue.push(front.left);
      }
      if (front.right !== undefined) {
        queue.push(front.right);
      }
    }
    return maxValue;
  }



  fizzBuzz() {
    if (this.root === undefined) {
      throw new Error('empty binary tree');
    }
    let queue = [];
    let numbers = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      let front = queue.shift();
      if (front.value % 5 === 0) {
        front.value = "Buzz";
        numbers.push(front);
      }
      if (front.value % 3 === 0) {
        front.value = "Fizz";
      }
      if (front.value % 3 === 0 && front.value % 5 === 0) {
        front.value = "FizzBuzz";
      }
      if (front.left !== undefined) {
        queue.push(front.left);
      }
      if (front.right !== undefined) {
        queue.push(front.right); // if there is push it to queue
      }
    }
    return numbers;
  }
}

module.exports = BinaryTree;
