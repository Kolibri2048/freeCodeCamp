// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns 
// them as a two-dimensional array.

// sol 
function chunkArrayInGroups(arr, size) {
  
    let res = []
    for (let i = 0; i < arr.length; i += size) {
        
        res.push(arr.slice(i, i + size))
        console.log(res)
    }
    return res
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

