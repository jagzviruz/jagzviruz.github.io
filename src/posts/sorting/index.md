---
title: Sorting in Javascript
slug: /sorting
date: '2020-08-16T11:40'
spoiler: A collection of articles on performing sorting on an array of items in javascript
tags: ['sorting']
keywords: ['sorting']
---
Sorting is one of the most common tasks done in programming needed for organising lists of items.
Generally, sorting implies arranging items in an ascending order unless specified.

While there are a variety of sorting algorithms, they can be broadly classified into:

#### Comparision based sorting
In this strategy, array elements are selected and compared against each other to sort them. This includes popular algorithms such as
- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge sort
- Heap Sort
- Quick Sort

#### Non Comparision based sorting
These use a strategy of bucketing elements based on some conditions.  Examples include,

- Radix Sort
- Counting Sort
- Bucket Sort


Other classifications for these sorting techniques are
- **Inplace/Outplace Technique** : If a sorting method requires extra memory (comparable to the number of elements in the source array), it is considered to be an *Outplace Technique*. If it uses no additional space or uses a small constant space, then its considered as a *Inplace Technique*.


| InPlace Technique | Outplace Technique |
|-------------------|--------------------|
| Bubble sort       | Merge sort         |
| Selection sort    | Radix sort         |
| Insertion sort    | Counting sort      |
| Heap sort         | Bucket sort        |
| Quick sort        | |


- **Online/Offline Technique** : This describes the ability of a sorting strategy to handle addition of items to the array while the sorting procedure is going on. An *offline sorting* technique needs all the data upfront, and cannot accept data while its in progress. It will add the new data only after its done sorting its current dataset. *Online Technique* evaluates incoming data and re-"sorts" its data as frequently as needed and maintains a sorted set at any given point. This technique is very useful for streaming data.

| Offline Technique | Online Technique |
|-------------------|------------------|
| Bubble sort       | Insertion sort   |
| Selection sort    | Heap sort        |
| *and many more..* |

- **Stable/Unstable Algortihms** : A cursory glance of this sorting techniques would not be immediately obvious for primitive values like *numbers*, or *characters*. However if you are sorting an array of objects, based on the value of one of their properties, the order of items in which they appear in the original array could potentially be important. *Stable algorithms* ensure that duplicate items upon sorting, appear in the order they appeared in the source array. With *Unstable algorithms*, it is difficult to predict the order without additional work.

| Stable Technique | Unstable Technique |
|------------------|--------------------|
| Insertion sort   | Quick sort         |
| Bubble sort      | Heap sort          |

In this series of articles, I will be sharing javascript impplementations for various sorts.

**Note**: It would be worth while for Javascript developers to remember, that the *Array.sort* method performs an in-place sort and has an internal technique of sorting that depends on the environment. Hence, time-and space complexity for this cannot be guaranteed unless the environment is guaranteed. For example, Chrome implements a stable sorting algorithm for sizes less than 10, an unstable algorithm, Quicksort when the number of items exceed 10. Other browsers have historically implemented stable sorting methods for their `array.sort`.
