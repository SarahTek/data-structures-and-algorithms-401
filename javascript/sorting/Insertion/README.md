# Insertion-Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.
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
