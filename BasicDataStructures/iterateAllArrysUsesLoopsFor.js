// Итерация по всем элементам массива с использованием циклов for
// Иногда при работе с массивами очень удобно иметь возможность перебирать каждый элемент, чтобы найти один или несколько элементов,
//  которые могут нам понадобиться, или манипулировать массивом на основе того, какие элементы данных соответствуют определенному набору критериев.
//   JavaScript предлагает несколько встроенных методов, каждый из которых перебирает массивы немного разными способами для достижения разных 
//   результатов (таких как every(), forEach(), map(), и т. д.), однако наиболее гибким и обеспечивающим наибольший контроль является метод простого
//    forцикла.

// Рассмотрим следующее:



// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// Используя forцикл, эта функция перебирает и обращается к каждому элементу массива и подвергает его простому тесту,
//  который мы создали. Таким образом, мы легко и программно определили, какие элементы данных больше, чем 10, и вернули новый массив ,
//   [12, 14, 80]содержащий эти элементы.



//Task
// Мы определили функцию, filteredArrayкоторая принимает arrвложенный массив и elemв качестве аргументов и возвращает новый массив. 
// elemпредставляет элемент, который может присутствовать или отсутствовать в одном или нескольких массивах, вложенных в arr. Измените функцию,
//  используя forцикл, чтобы она возвращала отфильтрованную версию переданного массива таким образом, чтобы любой массив, вложенный в arrсодержащий,
//   elemбыл удален.
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//   Подсказка 1
// forДля поиска по каждому элементу массива необходимо использовать цикл .
// for (let i = 0; i < arr.length; i++) {}
// Подсказка 2
// Затем каждый элемент массива необходимо сравнить с elemпараметром, переданным через filteredArray()функцию.
// if (arr[i].indexOf(elem) == -1) {
// }
// Подсказка 3
// Если совпадение НЕ найдено, newArrдобавьте весь этот подмассив. Здесь функция push()очень полезна.
// newArr.push(arr[i]);
// Как только весь этот подмассив будет добавлен в newArrцикл, продолжите работу со следующим элементом.