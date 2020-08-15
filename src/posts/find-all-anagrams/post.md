---
title: Find all anagrams of a string in another string
slug: /find-all-anagrams-of-string-in-another
date: '2020-08-13T01:24'
spoiler: Given 2 strings of varying lengths, find positions of anagrams of shorter string in bigger string
tags: ['javascript', 'leetcode','anagrams', 'strings', 'sliding window']
keywords: ['javascript', 'interview questions', 'optimal solution']
---

## Question

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

```md
Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
```md
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

## Discussion

A naive approach for this problem would be to find all possible anagrams of the givcen string `p` and store them in an array, say `pAnagrams`.
Since the length of all anagrams of this is going to be constant, say `pLen`, you can progressively extract substrings of length `pLen` from the
string `s`. Now check if it is present in the array `pAnagrams` and if it is present (`indexOf` returns a value more than -1) then store the
index position.

This approach can work, but it involves the additional cost of generating all permutations of the string `p` which is `O(n^2 * n!)`;

So let's take a look at how we can optimise this. What we want to ensure is that the the characters and their occurence sum between two points in the string `s` is exactly
the same as the string `p`.

eg: if the string `p` is `dfeghied` , this implies a string of length `8` will be ana anagram of `p` if,
- number of `d` = 2,
- number of `e` = 2,
- number of `f` = 1,
- number of `g` = 1,
- number of `h` = 1,
- number of `i` = 1


## Solution

We shall create 2 arrays of that can accomodate the character counts for each alphabet in the given strings. We shall use their `distance`
from the letter `a` to identify which position in the array to use for that character.

*viz. the letter `e` is the fifth letter in the alphabet, so its occurence count will be stored in the index position `4` since arrays are
zero indexed in Javascript.*


```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    /**
     * We get the ASCII value of the letter 'a' using the `charCodeAt` function.
     * We then deduct the ASCII value of 'a' from the ASCII value of any letter
     * to identify its index position.
     */
    const CHAR_CODE_A = 'a'.charCodeAt(0);
    const NUM_ALPHA = 26;
    const output = [];
    const pArray = Array(NUM_ALPHA).fill(0);
    const sArray = Array(NUM_ALPHA).fill(0);
    const pLen = p.length;
    const sLen = s.length;

    let sumOfNumberOfChars = 0;
    let i = 0;
    let foundAt = -1;

    /**
     * We first get the occurence index for the string `p` and store it in
     * `pArray`
     */
    while( i<pLen ){
        let pos = p.charCodeAt(i) - CHAR_CODE_A;
        pArray[pos] = pArray[pos] ? pArray[pos] + 1 : 1;

        i++;
        sumOfNumberOfChars++;
    }

    let fast = 0;
    let slow = 0;

    while(fast < sLen){
        let pos = s.charCodeAt(slow) - CHAR_CODE_A;
        /**
         * We advance the `slow` pointer till it finds a character that is
         * present in the pArray;
         */
        while(pArray[pos] == 0 && slow < sLen){
            slow++;
            pos = s.charCodeAt(slow) - CHAR_CODE_A;
        }

        /**
         * As long as 'slow' is pointing at characters in the string `s` we try to find the anagrams.
         */
        if( slow < sLen ){
            let sPos;
            let tmpSumOfCharsFound = 0

            fast = slow;
            foundAt = slow; // `foundAt` marks the position where the first character from the string 'p' was found

            /**
             * We advance the `fast` pointer beginning at the position of `slow` character by character
             * until the distance between them is less than the length of the string 'p'
             * At the same time, we fill the sArray character with the incidents of the characters
             */
            while ( (fast - slow) < pLen ){
                sPos = s.charCodeAt(fast) - CHAR_CODE_A;
                if(pArray[sPos] == 0) break;
                sArray[sPos] = sArray[sPos] ? sArray[sPos] + 1 : 1;
                fast++;
                tmpSumOfCharsFound++;
            }

            // Compare the two arrays, if they are same store the point at which the subtring was found to output
            if(tmpSumOfCharsFound == sumOfNumberOfChars && areArraysSame(sArray, pArray)){
                output.push(foundAt);
            }
            // Reset the sArray to find a new substring.
            sArray.fill(0);
            foundAt = -1;
            slow++;

        } else {
            break;
        }
    }



    return output;
};

function areArraysSame(arr1, arr2){

    if(arr1.length == arr2.length){
        let i = 0;
        let len = arr1.length;

        while(arr1[i] == arr2[i] && i<len) i++;

        return i == len;
    }

    return false
}
```
