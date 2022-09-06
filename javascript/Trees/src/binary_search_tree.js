const { Node, BinaryTree } = require("../src/binary_tree");

class BinarySearchTree extends BinaryTree {
  add(number) { 
    let current = this.root;
    let newNode = new Node(number);
    if (!this.root){
    this.root = newNode
  }
}
  contains(number) { }
}

module.exports = { BinarySearchTree };
