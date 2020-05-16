alert('3._lesson_08.05.20.js');

// 1. Первая задача на Freecodecamp - Convert Celsius to Fahrenheit (раздел Basic Algorithm Scripting)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit
// Переведите с цельсия в фаренгейт

// 1.1

// function convertToF(celsius) {
//     var fahrenheit = (celsius * (9 / 5)) + 32;

//     // return fahrenheit;
//     console.log(fahrenheit);
//   }
  

//   convertToF(0);    // should return a number
//   convertToF(-30);   // should return a value of -22
//   convertToF(-10);  // should return a value of 14
//   convertToF(0);    // should return a value of 32
//   convertToF(20);   // should return a value of 68
//   convertToF(30);   // should return a value of 86

// = (30 * (9/5)) + 32   = 86



// 1.2 верно

function convertToF(celsius) {

    return celsius * (9 / 5) + 32;
   
  }
  

//   convertToF(0);    // should return a number
//   convertToF(-30);   // should return a value of -22
//   convertToF(-10);  // should return a value of 14
//   convertToF(0);    // should return a value of 32
//   convertToF(20);   // should return a value of 68
//   convertToF(30);   // should return a value of 86
  console.log(convertToF(30));   // should return a value of 86

// = (30 * (9/5)) + 32   = 86











// 2. Вторая задача на Freecodecamp - Reverse a String (раздел Basic Algorithm Scripting)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
// Переверните предоставленную строку.

// 2.1 


// function reverseString(str) {
//     var array = [];
  
//     for(var i = 0; i < str.length; i += 1) {
//       array.unshift(str.charAt(i));
//     }

//     var result = array.join('');
//     return result;
//     // console.log(result);
//   }


// reverseString("hello"); // should become "olleh".
// reverseString("Howdy") // should become "ydwoH".
// reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".









// 2.2 

// function reverseString(str) {

//     var arr = str.split(); // перевела строку в массив
//     var newArr = [];
//     var i, j;

//     for(i = 0; i <= str.length - 1; i += 1) { 
//         newArr.unshift(arr[0][i]); // циклом прошлась, загнала в массив буквы reverse
//     }

//     var newStr = newArr.join(); // перевела массив в строку

//     var result = '';

//     Pass:
//     for(j = 0; j <= newStr.length - 1; j += 1) {

//         if(newStr[j] === ',') continue Pass; // откинула лишние символы с строки, а именно ','

//         result += newStr[j]; // все символі кроме ',' добавила в переменную 

//     }

//     return result;
//     // console.log(result);

// }
  
//   reverseString("hello"); // should become "olleh".
//   reverseString("Howdy") // should become "ydwoH".
//   reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".





// 2.3 

// function reverseString(str) {

//     var arr = str.split(); // перевела строку в массив
//     var newArr = [];
//     var i;

//     for(i = 0; i <= str.length - 1; i += 1) { 
//         newArr.unshift(arr[0][i]); // циклом прошлась, загнала в массив буквы reverse
//     }

//     var newStr = newArr.join(''); // перевела массив в строку, и сразу убрала лишние ','

//     return newStr;
//     // console.log(newStr);
// }
  
//   reverseString("hello"); // should become "olleh".
//   reverseString("Howdy") // should become "ydwoH".
//   reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".






// 3. Седьмая задача на Freecodecamp - Repeat a String Repeat a String (раздел Basic Algorithm Scripting)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
// Freecodecamp почему то не засчитал, хотя в консоле відает все правильно



// function repeatStringNumTimes(str, num) {

//     var result = '';

//     for(i = 0; i <= num - 1; i += 1) {
//         result += str;
//     }


//     return result;
//     // console.log(result);
//   }

// repeatStringNumTimes("*", 3); // should return "***"
// repeatStringNumTimes("abc", 3); // should return "abcabcabc"
// repeatStringNumTimes("abc", 4); // should return "abcabcabcabc"
// repeatStringNumTimes("abc", 1); // should return "abc"
// repeatStringNumTimes("*", 8); // should return "********"
// repeatStringNumTimes("abc", -2); // should return ""
// // The built-in repeat() method should not be used.
// repeatStringNumTimes("abc", 0); // should return ""





// 4. Создайте массив arr с числовыми величинами 45,78,10,3. Добавьте в массив arr еще одно число. Посчитайте в переменную sum сумму чисел в нем, при помощи цикла for/while.

// var arr = [45, 78, 10, 3];
// arr.push(66);
// console.log(arr);

// var sum = 0;

// 4.1 Цикл for 

    // var i;
    // for(i = 0; i <= arr.length - 1; i += 1) {
    //     sum += arr[i];
    // }

    // console.log(sum);

// 4.2 Цикл while

    // var i = 0;
    // while(i <= arr.length - 1) {
    //     sum += arr[i];
    //     i += 1;
    // }

    // console.log(sum);











// 5.Дан объект
// var salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.


// var salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }

// var sum = 0;
// var key;

// for(key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);








// 6. в строке заменить каждую букву ее положением в алфавите.

// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// На Codevars код засчитан по if =)


// 6.1 Условный оператор if ____________________________________________________________________________________________________

// function alphabetPosition(str) {

//     var i;
//     var newStr = '';

    
//     for(i = 0; i <= str.length - 1; i += 1) {
      

//         if(str[i] === 'A' || str[i] === 'a') {
//             newStr += '1 ';
//         } else if(str[i] === 'B' || str[i] === 'b') {
//             newStr += '2 ';
//         } else if(str[i] === 'C' || str[i] === 'c') {
//             newStr += '3 ';
//         } else if(str[i] === 'D' || str[i] === 'd') {
//             newStr += '4 ';
//         } else if(str[i] === 'E' || str[i] === 'e') {
//             newStr += '5 ';
//         } else if(str[i] === 'F' || str[i] === 'f') {
//             newStr += '6 ';
//         } else if(str[i] === 'G' || str[i] === 'g') {
//             newStr += '7 ';
//         } else if(str[i] === 'H' || str[i] === 'h') {
//             newStr += '8 ';
//         } else if(str[i] === 'I' || str[i] === 'i') {
//             newStr += '9 ';
//         } else if(str[i] === 'J' || str[i] === 'j') {
//             newStr += '10 ';
//         } else if(str[i] === 'K' || str[i] === 'k') {
//             newStr += '11 ';
//         } else if(str[i] === 'L' || str[i] === 'l') {
//             newStr += '12 ';
//         } else if(str[i] === 'M' || str[i] === 'm') {
//             newStr += '13 ';
//         } else if(str[i] === 'N' || str[i] === 'n') {
//             newStr += '14 ';
//         } else if(str[i] === 'O' || str[i] === 'o') {
//             newStr += '15 ';
//         } else if(str[i] === 'P' || str[i] === 'p') {
//             newStr += '16 ';
//         } else if(str[i] === 'Q' || str[i] === 'q') {
//             newStr += '17 ';
//         } else if(str[i] === 'R' || str[i] === 'r') {
//             newStr += '18 ';
//         } else if(str[i] === 'S' || str[i] === 's') {
//             newStr += '19 ';
//         } else if(str[i] === 'T' || str[i] === 't') {
//             newStr += '20 ';
//         } else if(str[i] === 'U' || str[i] === 'u') {
//             newStr += '21 ';
//         } else if(str[i] === 'V' || str[i] === 'v') {
//             newStr += '22 ';
//         } else if(str[i] === 'W' || str[i] === 'w') {
//             newStr += '23 ';
//         } else if(str[i] === 'X' || str[i] === 'x') {
//             newStr += '24 ';
//         } else if(str[i] === 'Y' || str[i] === 'y') {
//             newStr += '25 ';
//         } else if(str[i] === 'Z' || str[i] === 'z') {
//             newStr += '26 ';
//         } 

//     }

//     var result = newStr.substring(0, newStr.length - 1); // все цифри имеют пробел после себя - '26 '. методом удалила самый последный пробел в строке.

//     console.log(result);
    
// }

// alphabetPosition("The sunset sets at twelve o' clock.");



// 6.2 Решение с помощью switch ____________________________________________________________________________________________________

// function alphabetPosition(str) {

//     var i;
//     var newStr = '';

//     for(i = 0; i <= str.length - 1; i += 1) {

//         switch(str[i]) {
//             case 'A': 
//             case 'a':
//                 newStr += '1 ';
//                 break;
//             case 'B': 
//             case 'b':
//                 newStr += '2 ';
//                 break;
//             case 'C': 
//             case 'c':
//                 newStr += '3 ';
//                 break;
//             case 'D': 
//             case 'd':
//                 newStr += '4 ';
//                 break;
//             case 'E': 
//             case 'e':
//                 newStr += '5 ';
//                 break;
//             case 'F': 
//             case 'f':
//                 newStr += '6 ';
//                 break;
//             case 'G': 
//             case 'g':
//                 newStr += '7 ';
//                 break;
//             case 'H': 
//             case 'h':
//                 newStr += '8 ';
//                 break;
//             case 'I': 
//             case 'i':
//                 newStr += '9 ';
//                 break;
//             case 'J': 
//             case 'j':
//                 newStr += '10 ';
//                 break;
//             case 'K': 
//             case 'k':
//                 newStr += '11 ';
//                 break;
//             case 'L': 
//             case 'l':
//                 newStr += '12 ';
//                 break;
//             case 'M': 
//             case 'm':
//                 newStr += '13 ';
//                 break;
//             case 'N': 
//             case 'n':
//                 newStr += '14 ';
//                 break;
//             case 'O': 
//             case 'o':
//                 newStr += '15 ';
//                 break;
//             case 'P': 
//             case 'p':
//                 newStr += '16 ';
//                 break;
//             case 'Q': 
//             case 'q':
//                 newStr += '17 ';
//                 break;
//             case 'R': 
//             case 'r':
//                 newStr += '18 ';
//                 break;
//             case 'S': 
//             case 's':
//                 newStr += '19 ';
//                 break;
//             case 'T': 
//             case 't':
//                 newStr += '20 ';
//                 break;
//             case 'U': 
//             case 'u':
//                 newStr += '21 ';
//                 break;
//             case 'V': 
//             case 'v':
//                 newStr += '22 ';
//                 break;
//             case 'W': 
//             case 'w':
//                 newStr += '23 ';
//                 break;
//             case 'X': 
//             case 'x':
//                 newStr += '24 ';
//                 break;
//             case 'Y':
//             case 'y':
//                 newStr += '25 ';
//                 break;
//             case 'Z': 
//             case 'z':
//                 newStr += '24 ';
//                 break;
//         }

//     }

//     var result = newStr.substring(0, newStr.length - 1);

//     console.log(result);

// }

// alphabetPosition("The sunset sets at twelve o' clock.");























// HЕНУЖНО ____ просто практика

// var a = 'abc kkk kkk';

// // var b = a + '000'; 

// // console.log(a);
// // console.log(b);

// var arr = a.split();

// var newArr = [];

// var newStr = '';

// // console.log(arr);

// arr[1] = '---';

// // console.log(arr);


// // for(var i = 0; i <= arr.length - 1; i += 1) {

//     for(var j = 0; j <= a.length - 1; j += 1) {

//         if(a[j] === 'a') {
//             // newStr + '-0-';
            
//         }

//     }

// // }

// // console.log(a);
// // console.log(newStr);



// var xxx = [1, 2, 3];

// var ttt = xxx.join();
// // console.log(ttt.length);

// var newTtt = '';


// for(var i = 0; i <= ttt.length - 1; i += 1){

//     if(ttt[i] === ',') {
//         newTtt += ' ';
//     } else {
//         newTtt += ttt[i];
//     }

//     // console.log(newTtt);

// }

// // console.log(ttt);
// // console.log(newTtt);



// var sssss = '000 ';

// var nnnn = sssss + '7777';

// nnnn = nnnn + ' 888888';

// nnnn = nnnn + '2';

// console.log(nnnn);



// var yyyyy = nnnn[nnnn.length - 1];

// console.log(yyyyy);
// console.log(nnnn);



// var str = "abcdef";

// var x = str.substring(0, str.length - 1);

// console.log(str);
// console.log(x);