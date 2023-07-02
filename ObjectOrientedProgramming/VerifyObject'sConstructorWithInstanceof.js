// Проверка конструктора объекта с помощью instanceof
// Каждый раз, когда функция-конструктор создает новый объект, говорят, что этот объект является экземпляром своего конструктора.
//  JavaScript дает удобный способ проверить это с instanceofоператором. instanceofпозволяет сравнивать объект с конструктором,
//   возвращая trueили falseосновываясь на том, был ли этот объект создан с помощью конструктора. Вот пример:

// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");

// crow instanceof Bird;
// Этот instanceofметод вернет true.

// Если объект создан без использования конструктора, instanceofбудет проверено, что он не является экземпляром этого конструктора:

// let canary = {
//   name: "Mildred",
//   color: "Yellow",
//   numLegs: 2
// };

// canary instanceof Bird;
// Этот instanceofметод вернет false.


//task
// Создайте новый экземпляр конструктора House, вызвав его myHouseи передав количество спален. 
// Затем используйте instanceofдля проверки того, что это экземпляр House.

//soll
function House(numBedrooms) {
   this.numBedrooms = numBedrooms;
}
let myHouse =  new House(4);
 
myHouse instanceof House
