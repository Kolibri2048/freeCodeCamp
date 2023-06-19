// Создайте массив всех ключей объекта с помощью Object.keys()
// Мы также можем сгенерировать массив, содержащий все ключи, хранящиеся в объекте, с помощью метода Object.keys().
//  Этот метод принимает объект в качестве аргумента и возвращает массив строк, представляющих каждое свойство объекта.
//   Опять же, для записей в массиве не будет определенного порядка.

// //task
// Завершите написание getArrayOfUsersфункции, чтобы она возвращала массив, содержащий все свойства объекта, 
// который она получает в качестве аргумента.

// soll
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj)
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

// outpoot
// [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
