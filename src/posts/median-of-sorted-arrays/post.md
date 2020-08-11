---
title: Median of two sorted arrays
slug: /median-of-two-sorted-arrays
date: '2020-08-11T22:30'
spoiler: Given two sorted arrays, find the median.
tags: ['javascript', 'leetcode','interview']
keywords: ['javascript', 'binary search', 'divide and conquer' ]
---

### Question
There are two sorted arrays *nums1* and *nums2* of size *m* and *n* respectively.

Find the median of the two sorted arrays. The overall run time complexity should be *O(log (m+n))*.

You may assume *nums1* and *nums2* cannot be both empty.

Example 1:
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```
Example 2:
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

### Discussion

So here we have 2 sorted arrays, that need to be merged so that you can find the median from the resulting array of elements. Now the important thing to notice here is, when you try to merge these arrays, the elements will not always fall in line like interlocking fingers. Here are a few examples to illustrate this.

```
I
[0,9]
[1,3,4,6]

Merging these arrays will result in [0,1,3,4,6,9]
----------------
II

[8]
[2,4,6]

=> [2,4,6,8]
```
So the tricky part of this problem is in merging the arrays in the most efficient way possible.

And now when we want to the find the **median**;

Remember:
> Median of a sorted set is the
> - middle element if there are an odd number of elements in it
> - average of the middle two numbers if there are an even number of elements


### Solution

This is a solution with inline comments to describe what is happening in the code.

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = mergeArrays(nums1, nums2);
    const len = merged.length;

    if( len % 2){ // if length is an odd number
        return merged[Math.floor(len/2)]
    } else { // if length is an even number
        let mid = len/2;
        return (merged[mid-1] + merged[mid]) / 2
    }
};

/**
 * This function will be responsible for merging the 2 arrays.
 * It accepts two non empty arrays of  different or same lengths,
 * and returns the merged array
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/

var mergeArrays = function(nums1, nums2){
    let total = nums1.length + nums2.length;
    let lastPos = total - 1 ;
    let ret = [];
    let long, short, i, j;

    /**
     * We first try to find out which of the two arrays is smaller.
     * If we successufully find the correct position for the elements
     * of the shorter array, the remaining elements in the longer array
     * can just be pushed to the end of the array that is being returned.
     */

    if(nums1.length > nums2.length){
        long = nums1;
        short = nums2;
    } else {
        long = nums2;
        short = nums1;
    }

    i = long.length - 1;
    j = short.length - 1;

    /**
     * We start filling the merged array (to be returned) from the
     * rear end. We select the greater of the two elements from the
     * 2 arrays using `i` and `j`. These 2 variables are pointing at
     * the tail end of the long and short arrays respectively.
     * When one of them reaches the 0th index, it means that array
     * has been completely placed in its correct position.
     */

    while( i>= 0 && j>= 0){

        if(long[i] > short[j]){
            ret[lastPos] = long[i];
            i--;
        } else {
            ret[lastPos] = short[j];
            j--;
        }
        lastPos--;
    }

    /**
     * For eg. consider the two input arrays were [0,2,3,4] and [6, 7, 8, 9, 10]
     *
     * In the beginning, i = 3, j = 4 and lastPos = 9
     * long[i] = 4 AND short[j] = 10.
     * SO ret[lastPos] = 10 and j is decremented. lastPos is also
     * decremented in order to find the next integer.
     *
     * i = 3, j= 3 and lastPos = 8
     * long[i] = 4 AND short[j] = 9.
     * SO ret[lastPos] = 9 and j and lastPos are decremented.
     *
     * and so on .. j continues to get decremented till it reaches -1.
     * As you see, although the longer array was exhausted, the shorter
     * array pointer has not moved at all. Hence, when one of the pointer
     * reaches the beginning, we just push the remaining elements from the
     * other array.
     */

    while( j >= 0){
        ret[lastPos--] = short[j--];
    }

    while( i >= 0){
        ret[lastPos--] = long[i--];
    }

    return ret;
}
```

**Note** : This solution is not the most optimal one as required by the question. The time complexity for this solution is *O(m+n)* due to the full iteration over each of the arrays. The required *logarthmic* solution can be implemented by using Binary search by considering only the contributing sections of the 2 arrays.  Iwill leave that for another discussion.
