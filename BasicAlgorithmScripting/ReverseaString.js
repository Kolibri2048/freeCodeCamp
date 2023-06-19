// Reverse a String
// Reverse the provided string and return the reversed string.

//task
// For example, "hello" should become "olleh".

//sol
function reverseString(str) {
    return str.split("").reverse().join('');
}
  
reverseString("hello");

//descr
// split метод разбивает строку на массив букв в данном случает метоже reverse переворачивает массив а
// join метод соединяет массив и возразает строку