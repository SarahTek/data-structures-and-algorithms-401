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
}


module.exports = { Node };





// module.exports = { Node, BinaryTree };











// function preOrder(root) {
//   // Root, Left, Right
//   // Return a single array
//   let traversal = [];
//   traversal.push(root.value); // Root

//   if (root.left) {
//     // Left
//     let leftTraversal = preOrder(root.left);
//     traversal = traversal.concat(leftTraversal);
//   }

//   // Right
//   if (root.right) {
//     let rightTraversal = preOrder(root.right);
//     traversal = traversal.concat(rightTraversal);
//   }

//   return traversal;
// }

// class BinaryTree {
//   constructor(root) {
//     this.root = root;
//   }

//   preOrder() {
//     // return this.root.preOrder();
//     return preOrder(this.root);
//   }
//   inOrder() { }
//   postOrder() { }
// }



// const preOrderOneLine = (root) =>
//   root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];
