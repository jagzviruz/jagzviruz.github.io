---
title: Javascript Sample
slug: /js-sample
date: '2020-08-07'
spoiler: Sample for javascript code highlighting
tags: ['javascript', 'js', 'sample']
keywords:
---
## Using Javascript highlight

```js
function createQuote(quote, callback){
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console:
// Like I always say, eat your vegetables!
```
