// Generate Random Whole Numbers within a Range
// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

// You'll call your minimum number min and your maximum number max.

// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code
//  is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal
// to myMin and less than or equal to myMax.

//Solution

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

//Explain

// Код Пояснение
// Math.random()генерирует наше случайное число от 0 до ≈ 0,9.
// Перед умножением он разрешает часть между круглыми скобками (myMax - myMin + 1)из-за оператора группировки ( ).
// За результатом этого умножения следует добавление, myMinа затем «округление» до наибольшего целого числа, меньшего или равного ему (например: 9,9 приведет к 9)
// Если бы значения были myMin = 1, myMax= 10, один результат мог бы быть следующим:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9