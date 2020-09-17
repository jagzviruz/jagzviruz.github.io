---
title: Robot running around in circles
slug: /robot-running-in-circle
date: '2020-09-17T22:31'
spoiler: Will this robot take over, or will it keep running around in circles ?
tags: [leetcode, simple instructions, directional logic, puzzle]
keywords: [javascript , basic problems, puzzles]
---

## Question
On an infinite plane, a robot initially stands at (0, 0) and faces *north*.  The robot can receive one of three instructions:

* `"G"`: go straight 1 unit
* `"L"`: turn 90 degrees to the left
* `"R"`: turn 90 degress to the right.

The robot performs the instructions given in order, and repeats them forever.

Return `true` if and only if there exists a circle in the plane such that the robot never leaves the circle.

**Example 1:**
```md
Input: "GGLLGG"
Output: true
Explanation:
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
```
**Example 2:**
```md
Input: "GG"
Output: false
Explanation:
The robot moves north indefinitely.
```
**Example 3:**
```md
Input: "GL"
Output: true
Explanation:
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
```

*Hint 1:* Calculate the final vector of how the robot travels after executing all instructions once - it consists of a change in position plus a change in direction.

*Hint 2:* The robot stays in the circle iff (looking at the final vector) it changes direction (ie. doesn't stay pointing north), or it moves 0.

## Solution

```js
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = 'N';
    let x = 0;
    let y = 0;

    for(let i = 0; i < instructions.length; i++){
        let ins = instructions[i];

        if(ins == 'G'){
            switch(dir){
                case 'N':
                    y++;
                    break;
                case 'E':
                    x++;
                    break;
                case 'W':
                    x--;
                    break;
                case 'S':
                    y--;
                    break;
            }

        } else if(ins == 'L'){
            switch(dir){
                case 'N':
                    dir = 'W';
                    break;
                case 'E':
                    dir = 'N';
                    break;
                case 'W':
                    dir = 'S';
                    break;
                case 'S':
                    dir = 'E';
                    break;
            }
        } else if (ins == 'R'){
            switch(dir){
                case 'N':
                    dir = 'E';
                    break;
                case 'E':
                    dir = 'S';
                    break;
                case 'W':
                    dir = 'N';
                    break;
                case 'S':
                    dir = 'W';
                    break;
            }
        }
    }

    return (x == 0 && y == 0) || dir != 'N';
};
```

<iframe height="400px" width="100%" src="https://repl.it/@jagzviruz/Bounded-Robot?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
