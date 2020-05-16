alert('4._lesson_12.05.20.js');

// 1. Дан массив [1, 2, [3, 4, [5, 6]]]; 
// Напишите функцию, которая будет рекурсивно выравнивать массив, где результатом будет [1, 2, 3, 4, 5, 6]. 
// Также найдите метод массива, который уже это делает и разберитесь самостоятельно как это работает.



// ---1.1---__________________________________решение задачи не рекурсивно________________________________________________

// function funk(arr) {
//     var i, j, p; // создание перемменных для цикла 
//     var len_i = arr.length - 1; // созданение длинны массива [1, 2, [...]] в переменную, для ускарение производительности


//     var newArr = [];

    

//     for(i = 0; i <= len_i; i += 1) { // проходимся циклом по массиву [1, 2, [...]], где каждое значение - і
//         var len_j = arr[i].length - 1; // созданение длинны массива [3, 4, [...]] в переменную, для ускарение производительности
//         if(Array.isArray(arr[i])) { // если arr[i] массив, запускаеться новый цикл

//             for(var j = 0; j <= len_j; j += 1) { // проходимся циклом по массиву [3, 4, [...]], где каждое значение - j
//                 var len_p = arr[i][j].length - 1; // созданение длинны массива [5, 6] в переменную, для ускарение производительности

//                 if(Array.isArray(arr[i][j])) { // если arr[j] массив, запускаеться новый цикл
//                     for(p = 0; p <= len_p; p += 1) { // проходимся циклом по массиву [5, 6], где каждое значение - p
//                         newArr.push(arr[i][j][p]);
//                     } 
//                 } else {
//                     newArr.push(arr[i][j]);
//                 }
                
//             }
//         } else {
//             newArr.push(arr[i]);
//         }
        
//     }
        
//      return newArr;

// }

// console.log(funk([1, 2, [3, 4, [5, 6]]]));
// console.log(funk([1, 2, 23, 24, [3, 33, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 33, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 4, [5, 6]]]));

//_____________________________________________________________________________________________________________________



// ---1.2---__________________________________решение задачи рекурсивно________________________________________________


// var newArr = []; 

// function funk(arr) {
    

//     for(elem of arr) { // проход цикла по массиву

//         if(typeof elem === 'object') { // проверка значений на тип данных
//             return funk(elem); // если тип данных object, то запускаем функцию еще раз
//         } else {
//             newArr.push(elem); // если тип данных НЕ object, то пушим в newArr
//         }
 
//     }
     
//     return newArr;

// }




// console.log(funk([1, 2, [3, 4, [5, 6]]]));
// console.log(funk([1, 2, 23, 24, [3, 33, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 33, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 4, [5, 50, 6, 66]]]));
// console.log(funk([1, 2, [3, 4, [5, 6]]]));



//_____________________________________________________________________________________________________________________











// 2. Дан массив [1, 2, 3, 4, 5, 6]. Найдите сумму чисел рекурсивно.


// ---2.1---__________________________________declarative___________________ВЕРНО СЧИТАЕТ___________________________________________


// function func(arr) {

//     return arr.reduce((accumulator, currentValue) => accumulator += currentValue);

// }

// console.log(func([1, 2, 3, 4, 5, 6])); // 21
// console.log(func([1, 2])); // 3


//_____________________________________________________________________________________________________________________

// ---2.2---__________________________________declarative____________________НЕ ВЕРНО СЧИТАЕТ__________________________________________


// function func(arr) {

//     var newArr = arr.reduce(function(accumulator, currentValue) {
//         accumulator += currentValue;
//         return accumulator;
//     });

//     return newArr;
   
// }

// console.log(func([1, 2, 3, 4, 5, 6]));
// console.log(func([1, 2]));




// -------------------------------




// var arr = [1, 2, 3, 4, 5, 6];

// var variable = arr.reduce(function(accumulator, currentValue) {
//         // debugger;
//         accumulator = accumulator + currentValue;
//         return accumulator;
//         // console.log(accumulator);
// });

// console.log(variable); // 21



//_____________________________________________________________________________________________________________________

// ---2.3---__________________________________imperative______________________________________________________________

// function funс(arr) {
//     var accumulator = 0;
//     var i;
//     var len = arr.length - 1;

//     for(i = 0; i <= len; i += 1) {
//         accumulator += arr[i];
//     }

//     return accumulator;
// }

// console.log(funс([1, 2, 3, 4, 5, 6]));
// console.log(funс([1, 2]));


//_____________________________________________________________________________________________________________________

// ---2.4---__________________________________решение задачи рекурсивно________________________________________________

// function func(arr) {
//     var i;
//     var accumulator = 0;
//     var len = arr.length - 1;

//     for(i = 0; i <= len; i += 1) {
//         if(typeof arr[i] === 'undefined') {
//             return arr[i - 1]; // если возвращяет в массиве тип данных undefined, то вернет значение которое было перед undefined
//         } else {
//             accumulator += arr[i]; // если значение не undefined, плюсует в аккумулятор
//         }
//     }
    
//     return accumulator;
// }

// console.log(func([1, 2, 3, 4, 5, 6]));
// console.log(func([1, 2]));


// -------------------------------

// function func(arr) {
//     var i;
//     var accumulator = 0;
//     var len = arr.length - 1;

//     for(i = 0; i <= len; i += 1) {

//         typeof arr[i] === 'undefined' ? arr[i - 1] : accumulator += arr[i]; // тернарный оператор

//     }
    
//     return accumulator;
// }

// console.log(func([1, 2, 3, 4, 5, 6]));
// console.log(func([1, 2]));




//_____________________________________________________________________________________________________________________








// 3. Freecodecamp - Factorialize a Number, 
// 3.1 Find the Longest Word in a String, 
// 3.2 Return Largest Numbers in Arrays, 
// 3.3 Confirm the Ending. 
// Постарайтесь решить задачи императивно и декларативно, где это возможно.

// ---3.1---__________________________________Factorialize a Number______________________________________________________

// function factorialize(num) {
//     var x = 1;
//     var i;

//     for(i = 1; i <= num; i += 1) {
//         x = x * i;
//     }
//     return x;
//   }
  
//   console.log(factorialize(5));
//   console.log(factorialize(10));
//   console.log(factorialize(20));
//   console.log(factorialize(0));


//_____________________________________________________________________________________________________________________

// ---3.2---__________________________________Find the Longest Word in a String________________________________________

// function findLongestWordLength(str) {
//    var newArr = str.split(' ');
//    var i;
//    var len_i = newArr.length - 1;
   
//    var longestWord = 0;


//    for(i = 0; i <= len_i; i += 1) {

//         if(longestWord < newArr[i].length) {
//             longestWord = newArr[i].length;
//         }

//     }

//    return longestWord;

//   }
  
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWordLength("The555555555555 quick brown fox jumped over the lazy dog"));


//_____________________________________________________________________________________________________________________

// ---3.3---__________________________________Confirm the Ending_______________________________________________________

function confirmEnding(str, target) {
    return str.endsWith(target) ? true : false;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Bastian", "o"));

//_____________________________________________________________________________________________________________________



// 4. Функция haveFun принимает 2 параметра: анонимную функцию, 
// которая возвращает 3 и анонимную функцию, которая возвращает 4. 
// Верните результатом функции haveFun сумму 3 и 4.


// function haveFun(param1, param2) {

//     return param1 + param2;

// }

// function func1() {
//     return 3;
// }

// function func2() {
//     return 4;
// }

// console.log(haveFun(func1(), func2()));