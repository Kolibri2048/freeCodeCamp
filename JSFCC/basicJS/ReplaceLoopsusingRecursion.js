//Description
// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself. To help understand this,
//  start by thinking about the following task: multiply the first n elements of an array to create the
//   product of those elements. Using a for loop, you could do this:

//Example
let arr = [1, 2, 5 , 6]

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      console.log(product *= arr[i]);
    }
    return product;
}

multiply(arr, 3)