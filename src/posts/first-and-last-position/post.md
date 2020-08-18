---
title: Find first and last positions of an element in a sorted array
slug: /first-last-positions
date: '2020-08-18T14:00'
spoiler: Given a sorted array of integers, find the first and last positions of given element.
tags: ['leetcode', 'javascript', 'binary search']
keywords: [search, binary, javascript, leetcode]
---
### Question

Given an array of integers *nums* sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of **O(log n)**.

If the target is not found in the array, return *[-1, -1]*.

**Example 1:**
```md
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```
**Example 2:**
```md
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Constraints:**
```md
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non decreasing array.
-10^9 <= target <= 10^9
```

### Discussion
Since this is a sorted array, a simple way of finding this would be to start iterating from the beginning of the array. When you find the element, mark the position, and the proceed until the value changes. However this would need **O(n)** time. Since the question mentions **O(log n)**, it hints at using a binary search operation.

So we need to look at the middle point of the given range.
- If the mid element is equal to the target -- expand the left and right pointers to find the limits.
- If the element is  smaller --  search in the right half.
- If the element is larger -- search in the left half.

### Solution

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const len = nums.length;
    let start = 0;
    let end = len - 1;
    let mid = Math.floor(len / 2);

    while(nums[mid] != target && start < end){

        if( nums[mid] > target ){
            end = mid - 1;
        } else if (nums[mid] < target){
            start = mid + 1;
        }

        mid = start + Math.floor((end - start) / 2);

    }

    if(nums[mid] == target){
        start = mid;
        end = mid;
        while(nums[start] == target) start--;
        while(nums[end] == target) end++;
        return [start+1, end-1]
    } else {
        return [-1, -1];
    }
};
```
<iframe height="1200px" width="100%" src="https://repl.it/@jagzviruz/Find-first-and-last-positions-of-an-element?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
