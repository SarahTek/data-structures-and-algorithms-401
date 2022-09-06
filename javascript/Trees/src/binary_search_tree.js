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
