---
title: Implementing a LRU Cache in Javascript
slug: /lru-cache
date: '2020-08-17T20:47'
spoiler: A short and simple implementation of a LRU Cache
tags: [javascript, lru cache, basic concepts]
keywords: [implement lru, cache, least recently used, delete, object oriented javascript]
---

### What is LRU ?

A **L**east **R**ecently **U**sed cache is a technique used in computer applications to optimise *get* operations for frequently accessed data that could potentially involve heavy processing/computation.

The store is initialised with a given capacity, and can store a maximum of that number of items. When a new item needs to be stored, the item that has been accessed the lowest number of times in the store will get *evicted*. This implies there needs to be a way to keep track of when the items were accessed. Due to this, the order of insertion is not relevant to the operations if any *get* operation have been performed. If no get operations were performed, remove the earliest inserted item.

All items stored in the **Cache** are indexed by keys and no two items can have the same keys.

### How to implement ?

Here I will be talking about a very simplistic implementation of the LRU cache using Javascript. Since Javascript doesn't have a "fixed" length data structure as in other programming languages like C, Java etc, we will have to artificially impose the limit.

There are 2 approaches of implementing this:

- Using **Arrays** : Arrays are a versatile data structure in Javascript and can be used for implementing a variety of data structures. In this case, you can insert items into the array as long as it is below the capacity. If it has reached capacity, remove the item at the *0*-th index to make space for the new item. Whenever an item is requested from the array, move the item to the tail end of the array.

- Using **Object**: A *HashMap* implementation is another popular approach for an LRU cache, and lends itself very well to the *get* operation using *keys*

In this discussion, I will be implementing it using **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**.


#### Interface
```
const CAPACITY = 3;
const Cache = new LRU(CAPACITY);

Cache.put('name', 'Jagadish');
Cache.put('age', '34');
Cache.size() // Return 2 , the current number of items
Cache.put('country', 'India');
Cache.get('name); // => Should return "Jagadish"
Cache.put('city', 'Bangalore'); // => Should evict 'age' as it wasn't accessed recently, and was the oldest inserted item.
Cache.get('city); // gives "Bangalore"
Cache.put('name', 'Jagadish, K.'); // Should update 'name' and not evict anything
Cache.get('age') // Should return NULL
Cache.empty() // Should flush the entire cache.
Cache.size() // Return 0
```

### Implementation
```js
/**
 * @param {number} capacity The maximum number of items to be retained in cache
 * @return {Cache}
 */
const LRU = function (capacity) {
  const MAX_ITEMS = capacity;
  const items = new Map();

  const size = () => items.size;

  const remove = (key) => {
    items.delete(key);
  };

  const empty = () => {
    items.clear();
  };

  const evict = () => {
    let oldestItem = items.keys().next().value;
    remove(oldestItem);
  };

  const put = (key, value) => {
    if (!items.has(key) && items.size == MAX_ITEMS) {
      evict();
    }

    items.set(key, value);
  };

  const get = (key) => {
    if (!items.has(key)) {
      return null;
    }

    const value = items.get(key);
    remove(key);
    put(key, value);

    return value;
  };

  return {
    size,
    empty,
    get,
    put,
    remove,
  };
};

```
<iframe height="1400px" width="100%" src="https://repl.it/@jagzviruz/LRU-Cache-in-Javascript?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
