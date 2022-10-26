'use strict';

const treeIntersections = (tree1, tree2) => {
  const array1 = tree1.preOrder();
  const array2 = tree2.preOrder();

  const map = new Set(array1);
  // const map = new Map();
  //  for (const a of array1){
  // map.set(a, true)
  // }
  const intersection = array2.filter(val => map.has(val));
  return intersection;
}


// export const treeIntersections = (tree1, tree2){
// let set = new Set(tree1.preOrder());
// return tree2.preOrder().filter(val => set.has(val));
// }
module.export = treeIntersections
