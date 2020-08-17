---
title: Shortest way to form a string
slug: /shortest-way-to-form-string
date: '2020-08-17T20:28'
spoiler: Check if a string was formed by using subsequences from another.
tags: [javascript, leetcode, two-pointer, subsequence ]
keywords: [javascript, leetcode, two-pointer, subsequence, ]
---

### Question
Given two strings *source* and *target*, return the minimum number of subsequences of *source* such that their concatenation equals *target*. If the task is impossible, return *-1*.

**Example 1:**
```md
Input: source = "abc", target = "abcbc"
Output: 2
Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
```

**Example 2:**
```md
Input: source = "abc", target = "acdbc"
Output: -1
Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
```
**Example 3:**
```md
Input: source = "xyz", target = "xzyxz"
Output: 3
Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
```
### Discussion

An exhaustive way of solving this problem would be to generate all subsequences of the *source* string and then use the array of subsequences to match against parts of the string.
It is important to note here that a **subsequence** of a string is a sequqnce of characters picked from the source in the same order they appear in the original string.

```md
For the string "aecdgga"

"ae", "adg", "da", "egg" are all subsequences.

"gd" is not a subsequence.
```

So the way to solve this problem is to check if characters in the *target* are appearing in the same order as in the *source*. So take two pointers, and compare the characters, if they are a match, then move both pointers ahead. When the pointers do not match, increment just the *source* pointer to see if the character is seen later in the string. If you reach the end of the string, without finding the character, you have to start from the begining of the string again.

If the second iteration, gives you an empty subsequence, that means the character in the *target* string is not present in the *source* string.

### Solution
```js
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
    var numSubsequences = 0;
    var remainingPart = target; // Initially no part of the target string has been found.

    while(remainingPart.length > 0){
        //Keep trying to find subsequence as long as there ramaining part is not null

        let subseq = '';
        /**
        * Use two pointers to point at source and remainingPart.
        * If the characters at both pointers match.
        *  - Append the subsequence from the source
        *  - Increment both the pointers
        * If the characters at both pointers do not match,
        *. - increment only the source pointer
        *
        */

        let sourcePointer = 0;
        let remainingPartPointer = 0;

        while (sourcePointer < source.length && remainingPartPointer < remainingPart.length){
            if(source[sourcePointer] == remainingPart[remainingPartPointer]){
                subseq = `${subseq}${source[sourcePointer]}`;
                remainingPartPointer++;
            }
            sourcePointer++;
        }

        /**
        * If at this point subseq is still empty, it means a character was found in the remainingPart
        * that is not present in source. So this means we can immediately return -1.
        */
        if (subseq.length == 0){
            return -1;
        }

        // A subsequence was found.
        numSubsequences++;

        /**
        * Now since the subsequence was found, we don't need to check that part.
        * So we can remove it from the remainingPart and start again.
        */
        remainingPart = remainingPart.substring(subseq.length);
    }

    return numSubsequences;
};
```
<iframe height="1400px" width="100%" src="https://repl.it/@jagzviruz/Shortest-way-to-form-string?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
