---
title: String to integer (atoi)
slug: /string-to-integer
date: '2020-08-31T14:30'
spoiler: Convert a given string to an integer.
tags: [leetcode, atoi, string conversion]
keywords: [interview questions, leetcode, javascript fundamentals]
---
### Question
Implement *atoi* which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in *str* is not a valid integral number, or if no such sequence exists because either *str* is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a *zero value* is returned.

**Note:**
* Only the space character ' ' is considered as whitespace character.
* Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: *[−2<sup>31</sup>,  2<sup>31</sup> − 1]*. If the numerical value is out of the range of representable values, *INT_MAX (2<sup>31</sup> − 1)* or *INT_MIN (−2<sup>31</sup>)* is returned.

*Example 1:*
```md
Input: "42"
Output: 42
```
*Example 2:*
```md
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
```
*Example 3:*
```md
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
```
*Example 4:*
```md
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.
```
*Example 5:*
```md
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
```

### Solution
```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const ascii = c => c.charCodeAt();
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    const PLUS = ascii('+');
    const MINUS = ascii('-');
    const ZERO = ascii('0');
    const NINE = ascii('9');
    const SPACE = ascii(' ');
    const isNotDigit = c => c < ZERO || c > NINE;
    const isOperator = c => {
        switch(c){
            case PLUS:
                sign = 1;
                return true;
            case MINUS:
                sign = -1;
                return true;
            default: return false;
        }
    };
    const numChars = str.length;
    let sign = 1;
    let integerValue = 0;
    let operatorFound = false;
    let digitFound = false;
    let i, c;
    let asciiValue;

    for(i=0; i<numChars; i++){
        c = str[i];
        asciiValue = ascii(c);
        if ( asciiValue === SPACE) {
            if(!digitFound && !operatorFound) {
                continue;
            } else {
                break;
            }
        }

        if(!digitFound && !operatorFound &&
           isOperator(asciiValue) ){
            operatorFound = true;
            continue;
        }

        if(isNotDigit(asciiValue)) {
            break;
        } else {
            integerValue = integerValue * 10 + (asciiValue - ZERO);
            digitFound = true;
        }
    }
    integerValue = integerValue * sign;

    if(integerValue <= INT_MIN) return INT_MIN;
    if(integerValue >= INT_MAX) return INT_MAX;

    return integerValue;
};
```

<iframe height="1000px" width="100%" src="https://repl.it/@jagzviruz/String-to-integer?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
