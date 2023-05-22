//             Извлечь совпадения
// До сих пор вы только проверяли, существует ли шаблон в строке. Вы также можете извлечь фактические совпадения, которые вы нашли с помощью
//  .match()метода.

// Чтобы использовать .match()метод, примените метод к строке и передайте регулярное выражение в круглых скобках.

// Вот пример:

// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// matchЗдесь вернется первый ["Hello"]и вернется второй ["expressions"].

// Обратите внимание, что .matchсинтаксис является «противоположным» методу, .testкоторый вы использовали до сих пор:

// 'string'.match(/regex/);
// /regex/.test('string');

// //task
// Примените .match()метод для извлечения строки coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result)
