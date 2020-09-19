---
title: Largest number from given integers in array.
slug: /largest-number-from-array
date: '2020-09-19T20:33'
spoiler: Form the largest number from a set of integers. Sounds easy ?
tags: [leetcode, javascript, sort, javascript arithmetic]
keywords: [javascript tricks, largest number]
---
## [Question](https://leetcode.com/problems/largest-number/)
Given a list of non negative integers, arrange them such that they form the largest number.

**Example 1:**
```
Input: [10,2]
Output: "210"
```
**Example 2:**
```
Input: [3,30,34,5,9]
Output: "9534330"
```
**Example 3:**
```
Input: [0, 0]
Output: "0"
```
Note: The result may be very large, so you need to return a string instead of an integer.

## Discussion
Sorting the numbers in descending order would have worked if all digits in the given array were single digit number.

```
[2,5,3,8,9]

Upon sorting : [9, 8, 5, 3, 2] => 98532

However as seen in Example 1 above, [10, 2] would have given "102"
however the largest possible number is "210"
```
We use Javascript's inbuilt ability to perform lexicographic comparision of numeric strings.

## Solution
```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let ret = [];

    const isAllZeroes = nums.every( item => item == 0);

    if(isAllZeroes) return "0";

    ret = nums.sort( (a,b) => {
        a = a.toString();
        b = b.toString();

        if (a == b){
            return 0;
        }
        return `${a}${b}` < `${b}${a}` ? 1 : -1;

    });

    return ret.join('');
};
```
