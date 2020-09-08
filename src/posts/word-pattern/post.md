---
title: Word pattern
slug: /word-pattern
date: '2020-09-08T08:17'
spoiler: Are they peas in a pod ?
tags: [javascript, basic, pattern matching, leetcode]
keywords: [basic problems, maps, patterns, word, arrays]
---
## Question
Given a *pattern* and a string *str*, find if *str* follows the same *pattern*.

Here follow means a full match, such that there is a bijection between a letter in *pattern* and a non-empty word in *str*.

**Example 1:**
```
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```
**Example 2:**
```
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```
**Example 3:**
```
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```
**Example 4:**
```
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```
**Notes:**
* You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

## Solution
```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const words = str.split(' ');
    const patToWord = {};
    const wordToPat = {};
    const len = words.length;

    let i = 0;
    let word;
    let lex;

    if(len == 1){
        return pattern.length == 1;
    }

    while(i < len){
        word = words[i];

        if(!patToWord[pattern[i]] && !wordToPat[word]){
            patToWord[pattern[i]] = word;
            wordToPat[word] = pattern[i];
        } else if(wordToPat[word]){
            if( wordToPat[word] != pattern[i] ){
                return false;
            }
        } else {
            return false;
        }

        i++;
    }
    return true;
};
```
<iframe height="1000px" width="100%" src="https://repl.it/@jagzviruz/Word-Pattern?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
