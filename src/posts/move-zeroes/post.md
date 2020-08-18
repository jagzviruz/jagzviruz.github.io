---
title: Move zeroes to end
slug: /move-zeroes
date: '2020-08-18T23:27'
spoiler: We want the zeroes at the end
tags: [javascript, basic programming, iteration]
keywords: [array manipulation, move zeroes]
---
### Question
Given an array of random integers, move all the zeros in the array to the end of the array. Try to keep this in *O(n)* time (or better)!

Source : [@casidoo](https://twitter.com/cassidoo)'s [newsletter](https://twitter.com/cassidoo).

### Solution
A solution better than *O(n)* cannot be found, because you need to peek at all elements atleast once. Since this is not guaranteed to be a sorted array, *binary searching* is not an option. The only optimisation that I can think of is,
- Whenever you find a zero, remove it and add it to the tail end of the array.
- Update the number of zeroes encountered, so that you can reduce the count from the total number of iterations needed.

This optimisation, however, will not be very useful if the supplied array has all the zeroes at the beginning. You keep modifying the array everytime you see a *0*, and continue with the next zero. So a better optimisation on top of this would be to :
- when you find a zero, store the point of encounter, and proceed till you find a non-zero element.
- splice array from start encounter point to before the current point removing all the intermediate zeroes.
- concat final array with the number of zeroes that were encountered/removed.

```js
/**
 * It moves all zeroes in an array given to the end in
 * O(n) time with no extra space.
 *
 * @param {array} arr - The array to be processed
 * @return {void}
 */

const moveZeroes = (arr) => {
  const len = arr.length;
  let curr = 0;
  let numZeroes = 0;

  while (curr < (len - numZeroes)){
    if(arr[curr] == 0){
      arr.splice(curr, 1);
      arr.push(0);
      numZeroes += 1;
    } else {
      curr += 1;
    }
  }
}
```

Now let's look at an implementation where you bunch your *splice* operations.

```js
/**
 * It moves all zeroes in an array given to the end in
 * O(n) time with no extra space.
 *
 * @param {array} arr - The array to be processed
 * @return {void}
 */
const moveZeroes_with_minimal_splicing = (arr) => {
  const len = arr.length;
  let curr = 0;
  let numZeroes = 0;

  while (curr < (len - numZeroes)){
    if(arr[curr] == 0){
      let foundZeroAt = curr;
      while(arr[curr] == 0) curr++;
      let numContinuous = curr - foundZeroAt;
      numZeroes += numContinuous;
      arr.splice(foundZeroAt, numContinuous);
    } else {
      curr += 1;
    }
  }
  const zeroes = new Array(numZeroes).fill(0);
  Array.prototype.push.apply(arr, zeroes);
}
```

<iframe height="1000px" width="100%" src="https://repl.it/@jagzviruz/Move-zeroes?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
