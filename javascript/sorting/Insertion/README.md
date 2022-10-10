# Insertion-Sort

Sorting refers to arranging items of a list in a specific order (numerical or alphabetic). Sorting is generally used in tandem with searching.

It is generally easier to search for an element (called the key) in a given list if the list is sorted, both visually and algorithmically.

There are many ways (algorithms) to sort a given list of elements. Merge Sort is one of the more popular, and more efficient ways to do so.

### Understanding the Logic Behind Merge Sort

Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

Here are the steps Merge Sort takes:

- Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
- Continue dividing the subarrays in the same manner until you are left with only single element arrays.
- Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.

## Pseudocode

```
SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;
        
  ```

## UML

![UML](./inertion-sort.png)
[PR](https://github.com/SarahTek/data-structures-and-algorithms-401/pull/71/commits/080b3b4190c4c7d5fedc1c15c43cc089c55dad64)
## Collabs

- Tony
- Martha
- Danny
