<<<<<<< HEAD
const { Node, BinaryTree } = require("./binary_tree");

class BinarySearchTree  extends BinaryTree{
  add(number) { 
    let current = this.root;
    let newNode = new Node(number);
    if (this.root === null){
    this.root = newNode;
  }else{
    return null;
  }
  const searchTree = node => {
    if ( number < node.number){
      if (!node.left){
        node.left = newNode;
      }else{
        searchTree(node.left);
      }
    }
  else if (number  > node.number)
  if (!right.node) {
    node.right = newNode;
  }
  else{
    searchTree(node.right);
  }
  }
}

// checks if it exists in the tree
  contains(number) {
    let currentNode = this.root;
    while(currentNode){
      if (number === currentNode.number){
        return true;
      }
      if (number < currentNode.number){
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right;
      }
    }
    return false;
   }
}

module.exports =  { BinarySearchTree } ;
=======
// Contains
//  - Argument: value
//  - Returns: boolean indicating whether or not the value is in the tree at least once.

const { Node, BinaryTree } = require('./binary_tree.js');

class BinarySearchTree extends BinaryTree {
  add(number) {
    // Creating a node and initialising
    // with data
    let newNode = new Node(number);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === undefined) {
      this.root = newNode;
    } else {
      // find the correct position in the
      // tree and add the node
      // adds the node to the correct place in the tree
      this.addNode(this.root, newNode);
    }
  }

  // Add
  //  - Arguments: value
  //  - Return: nothing
  //  - Adds a new node with that value in the correct location in the binary search tree.
  addNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.left === undefined) {
        node.left = newNode;
      } else {
        // if left is not null recur until
        // null is found
        this.addNode(node.left, newNode);
      }
      // if the data is more than the node
      // data move right of the tree
    } else {
      // if right is null insert node here
      if (node.right === undefined) {
        node.right = newNode;
      } else {
        // if right is not null recur until
        // null is found
        this.addNode(node.right, newNode);
      }
    }
  }

  treeContains(node, value) {
    if (node.value === value) {
      return true;
    }
    if (value < node.value && node.left) {
      return this.treeContains(node.left, value);
    } else if (value > node.value && node.right) {
      return this.treeContains(node.right, value);
    } else {
      return false;
    }
  }

  // contains(number, node) {
  //   if (node === undefined) {
  //     return false;
  //   }
  contains(value) {
    if (this.root.value === value) {
      return true;
    }

    if (value < this.root.value && this.root.left) {
      return this.treeContains(this.root.left, value);
    } else if (value > this.root.value && this.root.right) {
      return this.treeContains(this.root.right, value);
    } else {
      return false;
    }
  }
}


module.exports = { BinarySearchTree };






// const { Node, BinaryTree } = require('./binary_tree');

// class BinarySearchTree extends BinaryTree {
//   add(number, node) {
//     let newNode = new Node(number);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.addNode(this.root, newNode);
//     }


//   }

//   //const searchTree = node =>
//   addNode(node, newNode) {
//     if (number < node.number) {
//       if (!node.left) {
//         node.left = newNode;
//       } else {
//         addNode(node.left);
//       }
//     }
//     else if (number > node.number)
//       if (!right.node) {
//         node.right = newNode;
//       }
//       else {
//         addNode(node.right);
//       }
//   }
// }

// // checks if it exists in the tree
// contains(number) {
//   let currentNode = this.root;
//   while (currentNode) {
//     if (number === currentNode.number) {
//       return true;
//     }
//     if (number < currentNode.number) {
//       currentNode = currentNode.left;
//     } else {
//       currentNode = currentNode.right;
//     }
//   }
//   return false;
// }

// module.exports = { BinarySearchTree };
>>>>>>> bc9454e (finished CC 15 and 16)
