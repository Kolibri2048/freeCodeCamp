            // Найдите больше, чем первое совпадение
// До сих пор вы могли извлекать или искать шаблон только один раз.

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// Вот matchбы вернуться ["Repeat"].

// Чтобы искать или извлекать шаблон более одного раза, вы можете использовать флаг глобального поиска: g.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// И здесь match возвращает значение["Repeat", "Repeat", "Repeat"]


//task
// Используя регулярное выражение starRegex, найдите и извлеките оба Twinkleслова из строки twinkleStar.

// Примечание.
// В регулярном выражении может быть несколько флагов, например/search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line