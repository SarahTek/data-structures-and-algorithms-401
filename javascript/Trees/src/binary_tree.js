//Pre-order: root >> left >> right
// In - order: left >> root >> right
// Post - order: left >> right >> root

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
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

  bfs() {
    let result = [];
    const queue = [];
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


  // another solution for postOrder
  // let traversal = [];
  // const traverse = node => {
 // traverse.push(this.value);
 // if left child exists , go left again
 // if (this.left) traverse(this.left);
 // if right child exists , go right again
 // if (this.right) traverse(this.right);
 // } 
//  traverse.push(this.value);
//  return traverse;
  

}


module.exports = { Node };

