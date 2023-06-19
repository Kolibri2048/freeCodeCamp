// Изменить массив, хранящийся в объекте
// Теперь вы увидели все основные операции с объектами JavaScript. Вы можете добавлять,
// изменять и удалять пары ключ-значение, проверять, существуют ли ключи, и перебирать все ключи в объекте.
// По мере изучения JavaScript вы увидите еще более универсальные приложения объектов. Кроме того, уроки 
// по структурам данных, расположенные в разделе учебного плана «Подготовка к собеседованию по кодированию»,
// также охватывают объекты ES6 Map и Set , оба из которых похожи на обычные объекты, но предоставляют
// некоторые дополнительные функции. Теперь, когда вы изучили основы работы с массивами и объектами,
// вы полностью готовы приступить к решению более сложных задач с помощью JavaScript!

 //task
// Взгляните на объект, который мы предоставили в редакторе кода. Объект userсодержит три ключа.
// Ключ dataсодержит пять ключей, один из которых содержит массив friends. Отсюда видно, насколько 
// гибкими
// являются объекты как структуры данных. Мы начали писать функцию addFriend. Завершите его написание,
// чтобы он принимал userобъект и добавлял имя аргумента friendк хранящемуся в нем массиву 
// user.data.friendsи возвращал этот массив.


//soll
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
   let newArr = userObj.data.friends
    newArr.push(friend)
    return newArr
    // console.log(friend)
    
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));


//secondSoll

function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
  }
  