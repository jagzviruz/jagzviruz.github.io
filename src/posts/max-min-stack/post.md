---
title: Implement a MaxMin Stack
slug: /max-min-stack
date: '2020-08-26T21:56'
spoiler: Implement a stack data structure such that the maximum and minimum elements can be retrieved in *O(1)* time.
tags: [stack, leetcode, javascript, queue]
keywords: [stack, javascript, puzzle, dequeue]
---
This is a variation on the a Leetcode [question]()

### Question
Design a structure that is similar to a stack such that it supports `push`, `pop`, `top`, and retrieving the minimum and maximum elements in constant time.

*push(x)* -- Push element x onto stack.
*pop()* -- Removes the element on top of the stack.
*top()* -- Get the top element.
*getMin()* -- Retrieve the minimum element in the stack.
*getMax()* -- Retrieve the maximum element in the stack.


### Solution

In a usual `stack` data structure, time to fetch the `max` or `min` item would depend on the order in which elements had been `pushed` into it. You would have to `pop` out all items and find the minimum element, and push back all the items into it such that the items are not lost.

To implement it with constant retrieval time, you can use an additinoal `dequeue` structure such that, the head of the queue gets the global minima, and the tail gets the global maxima. It stores duplicate values of the minima and maxima such that, even if a 'max' or 'min' element is popped out, you will still know the global maxima/minima.

Since JS doesn't have a `queue` structure, we use an array to achieve that behavior.

```js
const MaxMinStack = function(){
  let MAX = Number.MIN_SAFE_INTEGER;
  let MIN = Number.MAX_SAFE_INTEGER;

  let size = 0;
  const itemStack = [];
  const dequeue = [];

  const push = (item) => {
    if (item >= MAX){
      MAX = item;
      dequeue.push(item);
    } else if (item <= MIN){
      MIN = item;
      dequeue.unshift(item);
    }

    itemStack.push(item);
    size++;
  }

  const pop = () => {
    const item = itemStack.pop();

    if(item == MAX){
      dequeue.pop();
      MAX = dequeue[dequeue.length - 1];
    }

    if(item == MIN){
      dequeue.shift();
      MIN = dequeue[0];
    }
    size--;
    return item;
  }

  const top = () => itemStack[size - 1];

  const getMin = () => size ? MIN : 'Stack is empty';
  const getMax = () => size ? MAX : 'Stack is empty';

  return {
    push,
    pop,
    top,
    getMin,
    getMax,
  }
};
```

<iframe height="1000px" width="100%" src="https://repl.it/@jagzviruz/MaxMinStack?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
