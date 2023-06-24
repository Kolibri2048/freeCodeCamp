// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//soll 1
function findLongestWordLength(str) {
    let strArr = str.split(' ');
    let startVal = 0;
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i].length > startVal) {
        startVal = strArr[i].length;
        
      }
    }
    return startVal
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");