            // Use Destructuring Assignment to Assign Variables from Arrays
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into
//  a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array.
//  We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.

//Task
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
// Solution
let a = 8, b = 6;
[a, b] = [b, a]
// Only change code below this line



                // Destructuring via rest elements
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);
// console.log(arr);
// The console would display the values 1, 2 and [3, 4, 5, 7].

// Variables a and b take the first and second values from the array. After that, because of the rest syntax presence,
//  arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. 
//  As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.


 //task
// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return
//  a sub-array of the original array list with the first two elements omitted.

//Solution
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
