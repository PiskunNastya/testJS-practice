alert('#2 – Жадные и ленивые квантификаторы');

// var reg = /\d\d\.\d\d\.\d\d\d\d/

// var str = 'Сегодня 18.06.2020';

// var result = str.match(reg);
// console.log(result);

// console.log(Array.isArray(result));




// var str2 = '1,2,   3,     4,   5,6   ,   7   ,8';
// var arr = str2.split(',');
// console.log(arr);

// var arr2 = str2.split('2');
// console.log(arr2);



//________________________________________________________________________________________

// var reg = /\s*,\s*/;                                // регулярное выражение
// // \s - пробел
// // * - от 0 до бесконечности    
// // (пробелов может быть от 0 до бесконечности)  
// // сама кома, которую будем убирать
// // \s - пробел
// // * - от 0 до бесконечности      
// // (пробелов может быть от 0 до бесконечности)  
// var str = '1,2,   3,     4,   5,6   ,   7   ,8';

// var result = str.split(reg);
// console.log(result);


//________________________________________________________________________________________

var reg = /\d{6}/;
var str = 'его тел 123456 .... бла-бла-бла';

var index = str.search(reg);
console.log(index);

var index2 = str.search('тел');
console.log(index2);
