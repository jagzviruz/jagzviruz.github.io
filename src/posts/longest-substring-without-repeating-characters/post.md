---
title: Longest substring without repeating characters
slug: /longest-substring-without-repeating-characters
date: '2020-08-31T09:44'
spoiler: Find the length of the longest substring without repeating characters.
tags: [leetcode, javascript, longest substring, sliding window]
keywords: [leetcode, javascript, longest substring, sliding window, interview questions, non repeating characters, hashmap]
---

Given a string, find the length of the longest substring without repeating characters.

*Example 1:*
```md
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```
*Example 2:*
```md
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
*Example 3:*
```md
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Discussion
We store every encountered character in a hashmap. If you encounter a character that is already present in the hashmap, store the substring as the current string to be checked for longest matching string. Now remove all characters before this duplicate characters from the hashmap.

```md
Str : adefbcdfgh
Hashmap : {}

- adefbcdfgh
  ^             hashmap: { a: 0 }

- adefbcdfgh
   ^            hashmap: { a: 0, d: 1 }

- adefbcdfgh
    ^           hashmap: { a: 0, d: 1, e: 2 }

- adefbcdfgh
     ^          hashmap: { a: 0, d: 1, e: 2, f: 3 }

- adefbcdfgh
      ^         hashmap: { a: 0, d: 1, e: 2, f: 3, b: 4 }

- adefbcdfgh
       ^        hashmap: { a: 0, d: 1, e: 2, f: 3, b: 4, c: 5 }

- adefbcdfgh
        ^       Duplicate found for 'd' with value 1
Delete all characters in the hashmap that were found before the point where the first 'd' i.e 1

- ad | efbcdfgh
       ^   ^    hashmap: { d: 6, e: 2, f: 3, b: 4, c: 5 }

- ad | efbcdfgh
       ^    ^   Duplicate found for 'f' with value 3

- adef | bcdfgh
         ^  ^   hashmap: { d: 6, f: 7, b: 4, c: 5 }

- adef | bcdfgh
         ^   ^  hashmap: { d: 6, f: 7, b: 4, c: 5, g: 8 }

- adef | bcdfgh
         ^    ^ hashmap: { d: 6, f: 7, b: 4, c: 5, g: 8, h: 9 }
```

### Solution
```js
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  const numLetters = s.length;
  let sp = 0, fp = 0;
  let seenHash = {};
  let currStr = s[sp];
  let longestSubstring='';

  seenHash[s[fp]] = fp;

  for(; fp< numLetters; fp++){
      if (sp === fp){
          fp += 1;
      }

      if(seenHash[s[fp]] !== undefined ){
          // move sp to character after matched string.
          sp = seenHash[s[fp]] + 1;

          // delete all character from seenhash that occurred before this new pointer.
          Object.entries(seenHash).forEach( ([key, value]) => {
              if (value<sp){
                  delete seenHash[key];
              }
          });
           seenHash[s[fp]] = fp;
      } else {
        currStr = s.substring(sp, fp+1);
        seenHash[s[fp]] = fp;
      }
      if(longestSubstring.length < currStr.length){
        longestSubstring = currStr;
      }
  }
  console.log(longestSubstring);
  return longestSubstring.length;
};
```
