// Используйте конструктор для создания объектов
// Вот Birdконструктор из предыдущей задачи:

// function Bird() {
//   this.name = "Albert";
//   this.color  = "blue";
//   this.numLegs = 2;
// }

// let blueBird = new Bird();
// ПРИМЕЧАНИЕ: this внутри конструктор всегда ссылается на создаваемый объект.

// Обратите внимание, что newоператор используется при вызове конструктора. Это говорит JavaScript создать новый экземпляр 
// с Birdименем blueBird. Без newоператора thisконструктор внутри не указывал бы на вновь созданный объект, что давало бы 
// неожиданные результаты. Теперь blueBirdвсе свойства определены внутри Birdконструктора:

// blueBird.name;
// blueBird.color;
// blueBird.numLegs;
// Как и любой другой объект, к его свойствам можно получить доступ и изменить их:

// blueBird.name = 'Elvira';
// blueBird.name;

//task
// Используйте Dog конструктор из прошлого урока, чтобы создать новый экземпляр Dog, назначив его переменной hound.
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();