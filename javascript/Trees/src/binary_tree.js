
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






}




module.exports = BinaryTree;







// class Node {
//   constructor(value, left, right) {
//     this.value = value;
//     this.left = left; // A Node
//     this.right = right; // A Node
//   }

//   preOrder() {
//     // root  left  right
//     // Return a single array
//     let traversal = [];
//     traversal.push(this.value); // Root

//     if (this.left) {
//       // Left
//       let leftTraversal = this.left.preOrder();
//       traversal = traversal.concat(leftTraversal);
//     }

//     // Right
//     if (this.right) {
//       let rightTraversal = this.right.preOrder();
//       traversal = traversal.concat(rightTraversal);
//     }

//     return traversal;
//   }

//   inOrder() {
//     //  left  root  right
//     let traversal = [];
//     traversal.push(this.value); // Root
//     if (this.left) {
//       // Left
//       let leftTraversal = this.left.inOrder();
//       traversal = [...leftTraversal, ...traversal];
//     }
//     // Right
//     if (this.right) {
//       let rightTraversal = this.right.inOrder();
//       traversal = [...traversal, ...rightTraversal];
//     }
//     return traversal;
//   }



//   postOrder() {
//     // left right  root
//     let traversal = [];
//     // Root
//     traversal.push(this.value);
//     // Right
//     if (this.right) {
//       let rightTraversal = this.right.postOrder();
//       traversal = [...rightTraversal, ...traversal];
//     }
//     // Left
//     if (this.left) {
//       let leftTraversal = this.left.postOrder();
//       traversal = [...leftTraversal, ...traversal];
//     }
//     return traversal;
//   }
//   bfs() {
//     let result = [];
//     let queue = [];
//     // if (this.root === undefined) {
//     //   throw new Error('tree is empty');
//     // }
//     queue.push(this.root);
//     while (queue.length > 0) {
//       let currentNode = queue.shift();
//       result.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     return result;
//   }

//   max() {
//     let traversal = [];
//     traversal.push(this.value); // Root
//     // Right
//     if (this.right) {
//       let rightTraversal = this.right.postOrder();
//       traversal = [...rightTraversal, ...traversal];
//     }
//     if (this.left) {
//       // Left
//       let leftTraversal = this.left.postOrder();
//       traversal = [...leftTraversal, ...traversal];
//     }
//     return Math.max(...traversal);

//   }
// }

// class BinaryTree {
//   constructor(root) {
//     this.root = root;
//   }

//   preOrder() {
//     return this.root.preOrder();
//   }
//   postOrder() {
//     return this.root.postOrder();
//   }
//   inOrder() {
//     return this.root.inOrder();
//   }
//   max() {
//     return this.root.max();
//   }
//   bfs() {
//     return this.root.bfs();
//   }

// }



// module.exports = { Node, BinaryTree };
