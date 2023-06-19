// Доступ к именам свойств с помощью скобочных обозначений
// В первом объектном вызове мы упомянули использование записи в квадратных скобках как способ доступа к значениям свойств с использованием оценки
// переменной. Например, представьте, что наш foodsобъект используется в программе для кассового аппарата супермаркета.
//  У нас есть некоторая функция, которая устанавливает, selectedFoodи мы хотим проверить наш foodsобъект на наличие этой еды.
//   Это может выглядеть так:

// let selectedFood = getCurrentFood(scannedItem);
// let inventory = foods[selectedFood];
// Этот код оценит значение, хранящееся в selectedFoodпеременной, и вернет значение этого ключа в foodsобъекте или undefinedесли оно отсутствует.
//  Скобочная нотация очень полезна, потому что иногда свойства объекта неизвестны до выполнения или нам нужно получить к ним доступ более
//   динамичным способом.


//task
// Мы определили функцию, checkInventoryкоторая получает отсканированный элемент в качестве аргумента. Возвращает текущее значение ключа 
// scannedItemв foodsобъекте. Вы можете предположить, что в качестве аргумента для checkInventory.

//sol
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));


