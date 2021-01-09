---
title: Longest palindromic string
slug: /longest-palindromic-string
date: '2020-12-20T10:30'
spoiler: Find the longest substring that is also a palindrome.
tags: [leetcode, javascript, longest palindrome substring, dynamic programming, ]
keywords: [leetcode, javascript, longest palindrom substring, dynamic programming, interview questions]
---
### Question
Given a string `s`, return the longest palindromic substring in `s`.

*Example 1:*
```md
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```
*Example 2:*
```md
Input: s = "cbbd"
Output: "bb"
```
*Example 3:*
```md
Input: s = "a"
Output: "a"
```
*Example 4:*
```md
Input: s = "ac"
Output: "a"
 ```

*Constraints:*

* <= s.length <= 1000
* `s` consist of only digits and English letters (lower-case and/or upper-case),

#### Hints
* How can we reuse a previously computed palindrome to compute a larger palindrome?
* If `aba` is a palindrome, is `xabax` and palindrome? Similarly is `xabay` a palindrome?
* Complexity based hint: If we use brute-force and check whether for every start and end position a substring is a palindrome we have `O(n^2)` start - end pairs and `O(n)` palindromic checks. Can we reduce the time for palindromic checks to `O(1)` by reusing some previous computation ?

### Solution
```js
/**
  * @param {string} s
  * @return {string}
  */
var longestPalindrome = function(s) {
  const len = s.length;
  const dp = [];
  let i = 0;
  let maxLength = 0;
  let substrStart = 0;

  // All substrings of length 1 are palindromes
  while (i < len) {
    dp[i] = [];
    dp[i][i] = true;
    i++;
  }
  maxLength = 1;

  // All substrings of length 2 are palindromes if both characters are same.
  i = 0;
  while (i < len - 1) {
    if (s[i] == s[i + 1]) {
      dp[i] = dp[i] || [];
      dp[i][i + 1] = true;
      substrStart = i;
      maxLength = 2; // Atleast one palindromic substring of length 2 is found
    }
    i++;
  }
  let substrLength = 3;


  while (substrLength <= len) {
    i = 0;

    while (i < len - substrLength + 1) {
      let j = i + substrLength - 1; // index of the position where a substring of length "substrLength" ends.

      if (s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i] = dp[i] || [];
        dp[i][j] = true;
        if (substrLength > maxLength) {
          maxLength = substrLength;
          substrStart = i;
        }
      }
      i++;
    }
    substrLength++;
  }

  return s.substr(substrStart, maxLength)
};
```
<iframe height="1000px" width="100%" src="https://repl.it/@jagzviruz/Longest-palindromic-string?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
