// Узнайте о функциональном программировании
// Функциональное программирование — это стиль программирования, в котором решения представляют собой простые, 
// изолированные функции без каких-либо побочных эффектов за пределами области действия функции:INPUT -> PROCESS -> OUTPUT

// Функциональное программирование — это:

// 1.  Изолированные функции — нет зависимости от состояния программы, в состав которой входят глобальные переменные, 
// подлежащие изменению

// 2.  Чистые функции - один и тот же вход всегда дает один и тот же результат

// 3.  Функции с ограниченными побочными эффектами — любые изменения или мутации состояния программы за пределами функции тщательно 
// контролируются.

// Участники freeCodeCamp любят чай.

//task
// В редакторе кода функции prepareTeaи getTeaуже определены для вас. Вызовите getTeaфункцию, чтобы получить 40
//  чашек чая для команды, и сохраните их в tea4TeamFCCпеременной.
// Function that returns a string representing a cup of green tea


//soll
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC)
// Only change code above this line