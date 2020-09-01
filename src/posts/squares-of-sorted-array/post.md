---
title: Squares of a Sorted Array
slug: /squares-of-sorted-array
date: '2020-09-01T07:47'
spoiler: Given an array of sorted integers, return a sorted array of its squares.
tags: [leetcode, javascript, interviews]
keywords: [leetcode, interview questions, basic, two-pointer]
---
## Question
Given an array of integers *A* sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

*Example 1:*
```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```

*Example 2:*
```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

**Note:**
* 1 <= *A.length* <= 10000
* -10000 <= *A[i]* <= 10000
* *A* is sorted in non-decreasing order.

## Solution
```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let l = 0, r = A.length - 1;
    const ret = [];

    while( l<=r ){
        let val;
        if(Math.abs(A[l]) > A[r]){
            val = A[l] * A[l];
            l++;
        } else {
            val = A[r] * A[r];
            r--;
        }
        ret.unshift(val);
    }

    return ret;
};
```
