---
title: Rotating an Array
slug: /rotate-array
date: '2020-09-17T13:39'
spoiler: Given an array, rotate its elements by the given number of steps.
tags: [programming basics, array shifting, rotation]
keywords: [coding, array, basics, shifting elements]
---
## What is array rotation?
It means shifting elements of an array by the specified number of steps. Elements that fall out of bounds get popped on back into the *head* or *tail* depending on which direction the array is being rotated.

*Example*
```md

[ 1 , 2 , 3 , 4 , 5 , 6 ]

Rotating it right by 1 step, 6 falls out of the right edge.
Hence it will get popped onto the head of the array.

[ 6 , 1 , 2 , 3 , 4 , 5 ]

Rotating it right by 3 steps.

[ 3 , 4 , 5 , 6 , 1 , 2 ]

Rotating it left by 2 steps.

[ 5 , 6 , 1 , 2 , 3 , 4 ]

```
## Solution
Let's solve this with a brute force approach and then go with a more optimised approach.

### Brute force
```js
function rotateLeft(arr, steps=1){
  while(steps){
    let eject = arr.shift();
    arr.push(eject);
    steps--;
  }
}

function rotateRight(arr, steps=1){
  while(steps){
    let eject = arr.pop();
    arr.unshift(eject);
    steps--;
  }
}

function rotate(arr, steps=0){
  if(steps > 0){
    rotateRight(arr, steps);
  } else {
    rotateLeft(arr, -steps);
  }
}
```
While this is a fairly straightforward approach, the numerous mutations to the array is definitely not a desirable operation.
Although it looks like a simple operation, due to the nature of Javascript, *Array* is a special instance of an *Object*.
The internal operations of removing an element and adding it to an array has multiple operations under the hood as can be seen in the
C++ implementation in the v8 engine [here](https://github.com/v8/v8/blob/master/src/builtins/builtins-array.cc).

### Approach 2

A more careful observation of this operation reveals that
* in case of a right rotation by *k* steps, the last *k* elements will get removed and appended to the head.
* in case of a left rotation by *k* steps, the first *k* elements will get removed and appended to the tail.

```js
function rotateLeft(arr, steps=1){
  let elems = arr.splice(0, steps % arr.length);
  Array.prototype.push.apply(arr, elems);
}

function rotateRight(arr, steps=1){
  steps = steps % arr.length;
  let elems = arr.splice(arr.length - steps, steps);
  arr.unshift(...elems);
}

function rotate(arr, steps=0){
  if(steps > 0){
    rotateRight(arr, steps);
  } else {
    rotateLeft(arr, -steps);
  }
}
```
Although this approach eliminates the need of repeatedly pushing and popping elements, it can be firther optimised by eliminating the need for changing the size of the array.

<iframe height="600px" width="100%" src="https://repl.it/@jagzviruz/Rotate-Array?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
