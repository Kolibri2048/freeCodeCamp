                // Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/.
//  Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex,
//  applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// The test method here returns true.

//Rus version
// Использование метода тестирования
// Регулярные выражения используются в языках программирования для сопоставления частей строк. Вы создаете шаблоны
// , чтобы помочь вам сделать это сопоставление.

// // Если вы хотите найти слово the в строке The dog chased the cat, вы можете использовать следующее регулярное выражение: 
// /the/. Обратите внимание, что в регулярном выражении не требуются кавычки.

// // В JavaScript есть несколько способов использования регулярных выражений. Один из способов проверить регулярное выражение
//  — использовать .test()метод. Метод .test()принимает регулярное выражение, применяет его к строке (которая помещается в круглые скобки)
//   и возвращает trueили false, если ваш шаблон что-то находит или нет.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// Метод testздесь возвращает true.

//task
// Примените регулярное выражение myRegexк строке, myStringиспользуя .test()метод.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
