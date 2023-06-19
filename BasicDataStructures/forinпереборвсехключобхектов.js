// Иногда вам нужно перебрать все ключи внутри объекта. Для этого можно использовать цикл for...in . Цикл for...in выглядит так:

// const refrigerator = {
//   'milk': 1,
//   'eggs': 12,
// };

// for (const food in refrigerator) {
//   console.log(food, refrigerator[food]);
// }
// Этот код регистрирует milk 1 и eggs 12с каждой парой ключ-значение в отдельной строке.

// Мы определили переменную foodв заголовке цикла, и эта переменная была установлена ​​для каждой клавиши объекта на каждой итерации,
//  в результате чего название каждой еды выводилось на консоль.

// ПРИМЕЧАНИЕ. Объекты не сохраняют порядок хранимых ключей, как это делают массивы; таким образом, положение ключа на объекте или относительный
//  порядок, в котором он появляется, не имеет значения при обращении к этому ключу или доступе к нему.


//task
// Мы определили функцию countOnline, которая принимает один аргумент, allUsers. Используйте оператор for...in внутри этой функции,
//  чтобы перебрать allUsersобъект и вернуть количество пользователей, чье onlineсвойство установлено на true. Пример объекта, которому 
//  можно передать, countOnlineпоказан ниже. Каждый пользователь будет иметь onlineсвойство, установленное на trueили false.

// {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

//soll
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0
    for (const user in allUsers) {
      if(allUsers[user].online === true) {
        result++
      }
    }
    return result
    // Only change code above this line
  }
  
  console.log(countOnline(users));
  