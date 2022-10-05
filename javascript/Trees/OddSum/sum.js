// class sumOfAllOdd {
//   constructor(node, sum) {


//     let root = sum.root;
//     let arr = [];

//     if (sum.root === null) {
//       return null;
//     } else {
//       if (sum.root % 2 != 0) {

//       }
//     }
//   }
// }

function sumOfAllOdd(bst) {
  if (bst = null) {
    return ("empty BST");
  };
  function sumOdd(node, sum = 0) {
    if (node === null) {
      return 0;
    } else {
      if (node.value % 2 != 0) {
        sum += node.value;
      }
    }
    return sum + sumOdd(node.left) + sumOdd(node.right);
  }
  return sumOdd(bst.root);
}
