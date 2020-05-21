alert('5._lesson_15.05.20.js');


//________________________________________________________________________________________________________________
// 1 Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.


// __1.1___________________________императивно Truncate a String________________________________________________
// function truncateString(str, num) {
//     var newArr = str.split(' - '); // преобразовала строку в массив, это не совсем императивно...
//     var i, j;
//     var len_i = newArr.length - 1; // сохранила длинну в переменную
//     newStr = '';

//     for(i = 0; i <= len_i; i += 1) { // проходимся по массиву, и выясняем что в нем только один элемент, по индексу 0
//         var len_j = newArr[i].length - 1; // сохранила длинну в переменную
        
        // for(j = 0; j <= len_j; j += 1) { // проходимся по эдинственному элементу массива, строке
        //     // так как тут мы проходимся по типу данных string, цикл начинаеться с 0, 
        //     // если поставим с 1 (как длинна), то первый элемент newArr[0][0] - в консоле будет пропускаться
        //     // console.log(typeof newArr[i][j]); // тип данных string
            
        //     if (str.length === num || str.length < num) { // если длинна строки равна или меньше num, выводим параметр str
        //         return str;
        //     } else if(j === num - 1) { 
        //         // так как когда мы по циклу проходимся по строке, первый индекс строки 0, а входящий параметр num начинаеться с 1, поэтому от num отняла 1
        //         // если индекс строки 8, и (num - 1) равно 8, то добавляем последенее значение и '...' в переменную newStr
        //         return newStr = newStr + newArr[i][j] + '...'; 
        //     } else {
        //         newStr += newArr[i][j]; // если все предыдущие условия не подходят, то добавляем текущее значение в переменную
        //     }
        // }
//     }
//   }

// // // console.log(truncateString("A tisket a-tasket A green and yellow basket", 1));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 1));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 2));

// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 3));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 4));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 5));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 6));
// // // console.log(truncateString("A-tisket a-tasket A green and yellow basket", 7));

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // should return "A-tisket...".
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // should return "Peter Piper...".
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // should return "A-tisket a-tasket A green and yellow basket".
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // should return "A-tisket a-tasket A green and yellow basket".
// console.log(truncateString("A-", 1)); // should return "A...".
// console.log(truncateString("Absolutely Longer", 2)); // should return "Ab...".

//___________________________________________________________________________________________________________

// __1.2___________________________декларативно Truncate a String________________________________________________

// function truncateString(str, num) {

//     var arr = str.split(' - '); // преобразовала строку в массив
//     var result = arr.reduce((accumulator, currentValue) => { // проход по массиву, где один элемент

//         for(var i = 0; i <= str.length - 1; i += 1) { // проход по единственному значению массива - строке 
//             if(str.length === num || str.length < num) {
//                 return str;
//             } else if(i === num - 1) {
//                 return accumulator = accumulator + currentValue[i] + '...';
//             } else {
//                 // console.log(currentValue[i]);
//                 accumulator += currentValue[i];
//                 // console.log(accumulator);
//             }
//         }

//     }, '');

//     return result;
//   }


// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // should return "A-tisket...".
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // should return "Peter Piper...".
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // should return "A-tisket a-tasket A green and yellow basket".
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // should return "A-tisket a-tasket A green and yellow basket".
// console.log(truncateString("A-", 1)); // should return "A...".
// console.log(truncateString("Absolutely Longer", 2)); // should return "Ab...".


//________________________________________________________________________________________________________________


//________________________________________________________________________________________________________________
// 2 Finders Keepers
// Create a function that looks through an array (first argument) and
// returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

//_2.1_______________________________________________________________________________________________________
// function findElement(arr, func) {
//     var i;

//     for(i = 0; i <= arr.length; i += 1) {
//         if(func(arr[i])) {
//             return arr[i];
//         }
//     }
//     return undefined;
// }
  

// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // should return 8.
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // should return undefined.
//___________________________________________________________________________________________________________

//________________________________________________________________________________________________________________





//________________________________________________________________________________________________________________
// 3 Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

//_3.1_______________________________________________________________________________________________________
// function booWho(bool) {
//     return typeof bool === 'boolean' ? true : false;
//   }
  
//   console.log(booWho(null));
//   console.log(booWho(true)); // должен вернуть истину.
//   console.log(booWho(false)); // должен вернуть истину.
//   console.log(booWho([1, 2, 3])); // должен вернуть false.
//   console.log(booWho([].slice)); // должен вернуть false.
//   console.log(booWho({ "a": 1 })); // должен вернуть false.
//   console.log(booWho(1)); // должен вернуть false.
//   console.log(booWho(NaN)); // должен вернуть false.
//   console.log(booWho("a")); // должен вернуть false.
//   console.log(booWho("true")); // должен вернуть false.
//   console.log(booWho("false")); // должен вернуть false.
  //___________________________________________________________________________________________________________

  //_3.2_______________________________________________________________________________________________________
//   function booWho(bool) {
//     return typeof bool === 'boolean';
//   }
  
//   console.log(booWho(null));
//   console.log(booWho(true)); // должен вернуть истину.
//   console.log(booWho(false)); // должен вернуть истину.
//   console.log(booWho([1, 2, 3])); // должен вернуть false.
//   console.log(booWho([].slice)); // должен вернуть false.
//   console.log(booWho({ "a": 1 })); // должен вернуть false.
//   console.log(booWho(1)); // должен вернуть false.
//   console.log(booWho(NaN)); // должен вернуть false.
//   console.log(booWho("a")); // должен вернуть false.
//   console.log(booWho("true")); // должен вернуть false.
//   console.log(booWho("false")); // должен вернуть false.
  //___________________________________________________________________________________________________________

//________________________________________________________________________________________________________________


//________________________________________________________________________________________________________________
// 4. Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// function titleCase(str) {
//     arr = str.split(' ');

//     return arr.map((elem) => {

//         var newStr = '';
//         for(var i = 0; i <= elem.length - 1; i += 1) {
            
//             if(elem[i] === elem[0]) {
//                 newStr += elem[i].toUpperCase();
//             } else {
//                 newStr += elem[i].toLowerCase();
//             }
//         }

//         return newStr;
//     }).join(' ');
    
//   }
  
//   console.log(titleCase("I'm a little tea pot")); //должен вернуться I'm A Little Tea Pot.
//   console.log(titleCase("sHoRt AnD sToUt")); //должен вернуться Short And Stout.
//   console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); //должен вернуться Here Is My Handle Here Is My Spout.

//________________________________________________________________________________________________________________


//________________________________________________________________________________________________________________
// 5. Return Largest Numbers in Arrays


// function largestNumbers(arr) {

//     var result = arr.map((elem) => { // возвращаем новый массив, проходимся по каждоме элементу массива
//         return elem.reduce((accumulator, currentValue) => {
//             debugger;
//             return accumulator = Math.max(accumulator, currentValue); // определяем самое большое число в вложенных массивах и возвращаем
//         })
//     })

//     return result;
// }

// // console.log(largestNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
// // console.log(largestNumbers([[1, 20, 30], [4, 5, 6], [7, 8, 9]])); 
// console.log(largestNumbers([[-1,-3,-2], [1,3,5], [2,6,3], [7,3,3]])); 

//________________________________________________________________________________________________________________


//________________________________________________________________________________________________________________ ПОКА ЧТО ПОД ВОПРОСОМ
// Find the Longest Word in a String без массива
// счетчик, пробел, если пробел
// текущее и предыдущее слово

// function findLongestWordLength(str) {
//     var accumulator = 0;
//     var word = '';
//     var i;

//     for(i = 0; i <= str.length - 1; i += 1) {
//         // debugger;
//         if(str[i] !== ' ') {
//             word += str[i];
//         } else {

//             if(accumulator <= word.length) {
//                 accumulator = word.length;
//                 word = '';
//             } else {
//                 // ???????                                                                                       ???????????????
//             }
                                                
//         }
        
//     }

//     return accumulator;
    
//   }
  
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // should return 6.
// //   console.log(findLongestWordLength("May the force be with you")); // should return 5.
// //   console.log(findLongestWordLength("Google do a barrel roll")); // should return 6.
// //   console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // should return 8.
// //   console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // should return 19.


//________________________________________________________________________________________________________________

function findLongestWordLength(text) {
    var accumulator = ' ';
    var word = ' ';
    var i;
    // console.log('Start');
    // text = toString(text);
    for(i = 0; i < text.length ; i += 1) {
        // debugger;
        if(text[i] !== ' ') {
            word += text[i];
            // console.log(text[i]);
            // console.log(word)
        } else {
            if(accumulator.length < word.length) {
                accumulator = word;
                word = ' ';
            } else {
                word = ' ';
            }
        }
    }
    return accumulator;
}

// end  = findLongestWordLength("The quick brown foxrrrrrrr jumped over the  lazy dog");
// console.log(end); // should return 6.
  console.log(findLongestWordLength("May the force be with you")); // should return 5.
//   console.log(findLongestWordLength("Google do a barrel roll")); // should return 6.
//   console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // should return 8.
//   console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // should return 19.













// _________________________________________________НЕ НУЖНО, ПРАКТИКА___________________________________________
// var arr = [1, 2, 3];
// // console.log(arr[0]);
// for(elem of arr) {
//     // console.log(elem);
//     // console.log(arr);
//     delete arr[1];
//     console.log(arr);

// }

// var str = '1-23'; // 4
// // newStr = delete str[1];
// console.log(str);
// console.log(str.length);
// // console.log(newStr);

// console.log("A-tisket a-tasket A green and yellow basket".length);


// console.log(Math.max(1, 2)); 


// var input = [ [-1,-3,-2], [1,3,5], [2,6,3], [7,3,3] ]; 
// var result = input.map(a=>a.reduce((a, b)=>Math.max(a, b))) // all magic here 
// console.log(result) // [-1,5,6,7]

