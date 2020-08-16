---
title: Bubblesort
slug: /sorting/bubblesort
date: '2020-08-16T12:35'
spoiler: A short article on how to perform "bubble sort" in Javascript
tags: [sorting, bubble-sort]
keywords: [sorting, bubble-sort, beginner javascript]
---

Bubble sort is one of the simplest sorting algorithms in computer science.
It is a comparision based sorting algorithm where elements are compared against
themselves. It is an exhaustive process where you check if two adjacent elements
are not in ascending order, and swap them if they are not. Once you reach the end
of the list, you restart from the beginning of the list and repeat until you have
an iteration where no swaps were done.

```js
/**
 * The function
* @param {Array} list  - the list of items to be sorted.
*/

function bubbleSort(list){
  const len = list.length;

  let didSwap;

  do{
    let i = 1;
    didSwap = false;

    while(i < len){

      if( list[i] < list[i-1] ){
        // the element needs to be swapped to previous index;
        let tmp = list[i - 1];
        list[i - 1] = list[i];
        list[i] = tmp;
        didSwap = true;
      }
      i++;
    }
  }while(didSwap);
}
```
Since Javascript passes objects by reference, the array passed in is mutated. If you do not want to modify the source array,
you need to clone it and return the sorted one at the end.

As can be seen, we iterate over the array multiple times. Its average and worst case (descending array of elements) complexity is **O(n<sup>2</sup>)**. It uses no additional
space as all swaps are done in place. The performance can be marginally improved by skipping the last element in progressive loops
as the biggest element settles at the end of each iteration.
