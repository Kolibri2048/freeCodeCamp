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

// soll 2
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
        longestLength = currentLength;
    }
        currentLength = 0;
    } else {
        currentLength++;
    }
}
    if (currentLength > longestLength) {
    longestLength = currentLength;
}
    
    return longestLength;
}

