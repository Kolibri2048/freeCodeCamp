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


// soll 3
// С использованием.reduce()

function findLongestWordLength(s) {
  return s
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
}
// Код Пояснение
// Для получения дополнительной информации reduce нажмите здесь. 6,2к

// Если вам интересно, что 0 после функции обратного вызова, она используется для присвоения начального значения longest,
//  чтобы Math.maxзнать, с чего начать.

// soll 4
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
//   Код Пояснение
//   Мы предоставляем Math.maxдлину каждого слова в качестве аргумента, и он просто вернет самый высокий из всех.
  
//   Давайте проанализируем все внутри Math.maxскобок, чтобы понять, как мы это делаем.
  
//   str.split(" ")разбивает строку на массив, используя пробелы в качестве разделителей. Он возвращает этот массив: 
//   [«The», «быстрый», «коричневый», «лиса», «перепрыгнул», «через», «самый», «ленивый», «собака»].
  
//   Затем мы создадим еще один массив, состоящий из длин каждого элемента массива str.split(" ")с map().
  
//   str.split(" ").map(word => word.length)возвращает [3, 5, 5, 3, 6, 4, 3, 4, 3]
  
//   Наконец, мы передаем массив в качестве аргумента для функции Math.max с оператором распространения...

// soll 5
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Код Пояснение
// Первая строка разбивает строку на отдельные слова. Затем мы проверяем, wordsостался ли только 1 элемент.
// Если это так, то это самый длинный элемент, и мы возвращаем его. В противном случае мы удаляем первый элемент и
// рекурсивно вызываем функцию findLongestWord, возвращая максимум между длиной первого результата и рекурсивным вызовом.
