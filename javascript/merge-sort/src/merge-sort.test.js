'use strict';

const mergeSort = require('./merge-sort');

describe('the function merge sort', () => {
  const array = [8, 4, 23, 42, 16, 15]
  test('check if irt sort the array', () => {
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  })
});
describe('the function merge sort at index 0', () => {
  const array = [8, 4, 23, 42, 16, 15]
  test('check if irt sort the array', () => {
    const sortedArray = mergeSort(array);
    expect(sortedArray[0]).toEqual(4);
    expect(sortedArray[3]).toEqual(16);

  })
});
