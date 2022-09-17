class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }



  preOrder() {
    // root  left  right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {
    //  left  root  right
    let traversal = [];
    traversal.push(this.value); // Root
    if (this.left) {
      // Left
      let leftTraversal = this.left.inOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    // Right
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = [...traversal, ...rightTraversal];
    }
    return traversal;
  }



  postOrder() {
    // left right  root
    let traversal = [];
    // Root
    traversal.push(this.value);
    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    // Left
    if (this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return traversal;
  }
  bfs() {
    let result = [];
    let queue = [];
    // if (this.root === undefined) {
    //   throw new Error('tree is empty');
    // }
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
    let traversal = [];
    traversal.push(this.value); // Root
    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return Math.max(...traversal);

  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();
  }
  postOrder() {
    return this.root.postOrder();
  }
  inOrder() {
    return this.root.inOrder();
  }
  max() {
    return this.root.max();
  }
  bfs() {
    return this.root.bfs();
  }
  fizzBuzz() {
    this.root.fizzBuzz();
  }

}



// module.exports = { Node, BinaryTree };
module.exports = Node;
