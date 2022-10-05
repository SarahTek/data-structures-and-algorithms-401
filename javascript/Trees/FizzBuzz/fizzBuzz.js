// function fizzBuzz(fb) {
//   let root = fb.root;
//   let queue = [];

//   if (fb.root === null) {
//     return null;
//   }
//   queue.push(root);
//   while (queue.length > 0) {
//     le(newTree) = queue.shift();
//     if (tree.value % 5 === 0) {
//       tree.value = "Buzz";
//     }
//     else if (tree.value % 3 === 0) {
//       tree.value = "Fizz";
//     }
//     if (tree.value % 3 === 0 && tree.value % 5 === 0) {
//       tree.value = "FizzBuzz";
//     }
//     if (trre.left != null) { // check if there left value
//       queue.push(tree.left); // if there is push it to queue
//     }
//     if (tree.right != null) { // check if there right value
//       queue.push(tree.right); // if there is push it to queue
//     }
//   }
//   return fb;
// }

const { Tree, fizzBuzz } = require("./tree");

class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [this.value, this.children.map((child) => child.preOrder())];
  }
}


function fizzBuzz(tree) {
  const newTree = new Tree(tree.value, tree.children);
  if (newTree.value % 3 === 0) {
    return "Fizz";
  }
  if (newTree.value % 5 === 0) {
    return "Buzz";
  }
  if (newTree.value % 3 === 0 & (newTree).value % 5 === 0) {
    return "FizzBuzz";
  }
  if (newValue != "") {
    newTree.value = newValue;
  }

  newTree.children = tree.children.map(fizzBuzz);

  return newTree;
}

module.exports = {
  Tree,
  fizzBuzz,
};
