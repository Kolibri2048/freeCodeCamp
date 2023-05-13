//Description
// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this,
//  start by thinking about the following task: multiply the first n elements of an array to create the
//   product of those elements. Using a for loop, you could do this:

//Example
let arr = [0, 1, 2, 3, 4, 5]

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      console.log(product *= arr[i]);
    }
    return product;
}

multiply(arr, 3)


//Example 2 use recursion
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
// That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
        console.log(arr, n - 1)
        console.log(arr[n - 1])
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  multiply(arr, 1)

  // The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n,
//    it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point,
//    all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

//Task
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

//Solution
function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
      return 0
    } else {
      return sum(arr, n - 1) + arr[n - 1]
    }
    // Only change code above this line
  }

// Other examples
// Рекурсия
let t = 0;
function f1() {
    t++;
    console.log(t)
    f1()
    if(t === 100) return
}

// f1()

// цикл

function f2() {
    let out = ''
    for(let i = 0; i <= 100; i++) {
        out += i + ' ';
    }
    console.log(out)
}
f2()

// Тоэе самое но рейкурсией
let i = 0
let out = '';
function f3() {
    i++
    out += i + ' ';
    f3()
    if(i >= 30) return
}
// console.log(out)


// задача на лицо с низкой сот отв...

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}

let s1 = 0;
function moneyRecursion() {
    let m = randomInt(0, 100);
    console.log('add: ' + m);
    s1 += m;
    console.log('sum: ' + s1);
    if(s1 >= 300) return
    moneyRecursion();

}

