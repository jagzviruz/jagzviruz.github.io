---
title: Selection sort
slug: /sorting/selection-sort
date: '2020-08-16T19:49'
spoiler: How to perform selection sort using javascript
tags: ['sorting']
keywords: ['sorting', selection sort, modified insertion sort]
---

This is stable sort technique which divides the given array in to 2 parts -- a sorted part and an unsorted part. In each iteration over the array, it tries to place the smallest element in the unsorted array at the beginning of it, hence expanding the sorted array by 1. The swapping is done in place so no additional space is required.

```md
  8, 9, 3, 20, 1, 10, 2, 3
^
Border of sorting

After first iteration.
  1, 9, 3, 20, 8, 10, 2, 3
  ^            -
               | Swapped 8 with 1

After second iteration.
  1, 2, 3, 20, 8, 10, 9, 3
     ^                -
                      | Swapped 9 with 2

After third iteration.
  1, 2, 3, 20, 8, 10, 9, 3
        ^


After third iteration.
  1, 2, 3, 3, 8, 10, 9, 20
           ^            -
                        | Swapped 20 with 3
and so on ..
```

```js
function selectionSort(arr){
  const len = arr.length;
  let smallestInsertAt = 0; // In the first iteration, the smallest will come to the head of the array.


  while(smallestInsertAt < len){
    let i = smallestInsertAt + 1;
    let smallestFoundAt = smallestInsertAt;

    while( i < len){
      if (arr[smallestFoundAt] > arr[i]){
        smallestFoundAt = i;
      }
      i++;
    }

    if(smallestFoundAt !== smallestInsertAt){
      let tmp = arr[smallestFoundAt];
      arr[smallestFoundAt] = arr[smallestInsertAt];
      arr[smallestInsertAt] = tmp;
    }

    smallestInsertAt = smallestInsertAt + 1;
  }

}

```

The Selection sort technique runs in quadratic time in all cases and has **O(n<sup>2</sup>)** time complexity and constant space complexity of **O(1)** as it does not use any additional space. It makes at most **O(N)** swaps. So it is advatageous to use in cases where the array is almost sorted or where the swapping operation is not very expensive. It has far fewer swaps than insertion sort or [`bubble sort`](/sorting/bubble-sort).

<iframe height="1400px" width="100%" src="https://repl.it/@jagzviruz/Selection-Sort?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
