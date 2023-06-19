// Проверить, есть ли у объекта свойство
// Теперь мы можем добавлять, изменять и удалять ключи из объектов. Но что, если мы просто хотим узнать, есть ли у объекта определенное свойство?
//  JavaScript предоставляет нам два разных способа сделать это. Один использует hasOwnProperty()метод, а другой использует inключевое слово.
//   Если у нас есть объект usersсо свойством Alan, мы можем проверить его наличие одним из следующих способов:

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Оба они вернутся true.



//task
// Завершите написание функции, чтобы она возвращала значение true, если переданный ей объект содержит все четыре имени, Alan,
//  Jeffи Sarahи Ryanвозвращает falseв противном случае.

 //soll
 let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
   return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");
  }

//sol2

let usersSol2 = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }

//description
// Код Пояснение
// Использует массив со всеми именами, которые должны присутствовать в объекте.
// Метод every используется для проверки всех имен, используемых в сочетании с hasOwnPropertyрезультатом метода, 
// значение которого trueвозвращается во время каждой итерации.
// Если с помощью метода не найдено хотя бы одно имя hasOwnProperty, everyметод возвращает false.

