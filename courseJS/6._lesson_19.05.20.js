alert('6._lesson_19.05.20.js');

// 1_______________________________________________________________________________________________
// Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     var x = arr2.splice(n, 0, arr1);
//     return arr2;
// }
  
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // should return [4, 1, 2, 3, 5].
// console.log(frankenSplice([1, 2], ["a", "b"], 1)); // should return ["a", 1, 2, "b"].
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
//________________________________________________________________________________________________
  


















// 2_______________________________________________________________________________________________ПОЧТИ ВЫШЛО, ПРОБЛЕМЫ С NaN и иногда в массиве остаеться undefined, что тут не так?
// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean

//function bouncer(arr) {

    //_2.1_______________________________________________________________________________

    // var newArr = arr.map((elem, index, array) => {


    //     if(elem === false) {
    //         array.splice(index, 1);
    //     } else if(elem === 0) {
    //         array.splice(index, 1);
    //     } else if(elem === "") {
    //         array.splice(index, 1);
    //     } else if(typeof elem === 'object') {
    //         array.splice(index, 1);
    //     } else if(typeof elem === 'undefined') {
    //         array.splice(index, 1);
    //     } else if(elem === NaN) {
    //         array.splice(index, 1);
    //     } else {
    //         return elem; 
    //     }

        

    // });
    // var x = newArr.flat();
    // return x;
    // return newArr;
  
    //_____________________________________________________________________________________

    //_2.2_______________________________________________________________________________

    // for(var i = 0; i <= arr.length - 1; i += 1) {
    //     if(arr[i] === false) {
    //         arr.splice(arr[i], 1);
    //     } else if(arr[i] === 0) {
    //         arr.splice(arr[i], 1);
    //     } else if(arr[i] === "") {
    //         arr.splice(arr[i], 1);
    //     } else if(typeof arr[i] === 'object') {
    //         arr.splice(arr[i], 1);
    //     } else if(typeof arr[i] === 'undefined') {
    //         arr.splice(arr[i], 1);
    //     } else if(arr[i] === undefined + 5) {
    //         arr.splice(arr[i], 1);
    //     } 

    // }
    // return arr;

    //_____________________________________________________________________________________

    //_2.3_______________________________________________________________________________

    // for(var i = 0; i <= arr.length - 1; i += 1) {
    //     if(arr[i] === NaN || arr[i] === false || arr[i] === 0 || arr[i] === "" || typeof arr[i] === 'object' || typeof arr[i] === 'undefined') {
    //         arr.splice(arr[i], 1);
    //     } 

    // }
    // return arr;

    //_____________________________________________________________________________________
    
//}
  



// console.log(bouncer([7, "ate", "", false, 9, 6])); // should return [7, "ate", 9].
// console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
// console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
// console.log(bouncer([false])); // should return [].
// console.log(bouncer([null])); // should return [].
// console.log(bouncer([0])); // should return [].
// console.log(bouncer([NaN])); // should return [].
// console.log(bouncer([undefined])); // should return [].
// console.log(bouncer([""])); // should return [].
// console.log(bouncer([null, NaN, 1, 2, undefined])); // should return [1, 2].



//________________________________________________________________________________________________


// 3_______________________________________________________________________________________________
// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
    
//     var newArr = arr.sort((a, b) => { // сортирую массив по увеличению элементов
//         return a - b;
//     });

//     var result = newArr.reduce((accum, elem) => { // проходимся циклом, по массиву с помощью метода
        
//         if(elem < num) { если elem меньше num, добавляю в accum +1
//             accum += 1;
//         } 
//             return accum;
//     }, 0); // назначаю accum = 0


//     return result;
//   }
  
//   console.log(getIndexToIns([40, 60], 50)); //;
//   console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
//   console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return a number.
//   console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return 2.
//   console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return a number.
//   console.log(getIndexToIns([40, 60], 50)); // should return 1.
//   console.log(getIndexToIns([40, 60], 50)); // should return a number.
//   console.log(getIndexToIns([3, 10, 5], 3)); // should return 0.
//   console.log(getIndexToIns([3, 10, 5], 3)); // should return a number.
//   console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return 2.
//   console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return a number.
//   console.log(getIndexToIns([2, 20, 10], 19)); // should return 2.
//   console.log(getIndexToIns([2, 20, 10], 19)); // should return a number.
//   console.log(getIndexToIns([2, 5, 10], 15)); // should return 3.
//   console.log(getIndexToIns([2, 5, 10], 15)); // should return a number.
//   console.log(getIndexToIns([], 1)); // should return 0.
//   console.log(getIndexToIns([], 1)); // should return a number.





//________________________________________________________________________________________________


// 4_______________________________________________________________________________________________
// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// function mutation(arr) {


//     var arr0_indexLowerCase = arr[0].toLowerCase(); // перевела первый элемент в малый регистр, так как метод includes чувствительный к регистру
//     var arr1_indexLowerCase = arr[1].toLowerCase(); // перевела второй элемент в малый регистр, так как метод includes чувствительный к регистру
//     var i;

//     var accum = 0; // аккумулятор будет насчитывать колицество совпадений в буквах

//     for(i = 0; i <= arr1_indexLowerCase.length - 1; i += 1) { // прошлась циклом по второму элементу, к первомую. Так как у второго элемента может быть только одна буква, а у первого целое предложение
//         if(arr0_indexLowerCase.includes(arr1_indexLowerCase[i])) { // проверила методом includes, есть ли в первом элементе, та буква, которая находиться во втором элементе
//             accum += 1; // если есть, аккумулятор + 1
//         }
//     }

//     return accum === arr1_indexLowerCase.length ? true : false; // если цифра в аккумуляторе равно длине второго элемента - true

//   }
  
//   console.log(mutation(["hello", "hey"])); 
//   console.log(mutation(["hello", "hey"])); // should return false.
//   console.log(mutation(["hello", "Hello"])); // should return true.
//   console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
//   console.log(mutation(["Mary", "Army"])); // should return true.
//   console.log(mutation(["Mary", "Aarmy"])); // should return true.
//   console.log(mutation(["Alien", "line"])); // should return true.
//   console.log(mutation(["floor", "for"])); // should return true.
//   console.log(mutation(["hello", "neo"])); // should return false.
//   console.log(mutation(["voodoo", "no"])); // should return false.
//   console.log(mutation(["ate", "date"])); // should return false.
//   console.log(mutation(["Tiger", "Zebra"])); // should return false.
//   console.log(mutation(["Noel", "Ole"])); // should return true.

//________________________________________________________________________________________________


// 5_______________________________________________________________________________________________
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  //_____________________________________________________________________________________ подсмотрела

//    var groups = [];
//    while(arr.length > 0) {
//        groups.push(arr.slice(0, size));
//        arr = arr.slice(size);
//    }

//    return groups;
  //_____________________________________________________________________________________

 var newArr = [];

 for(var i = 0; i <= arr.length - 1; i += 1) {
    newArr.push(arr.slice(0, size)); // slice возвращяет новый массив размером указанном в аргументах, и мы егопушим в новый массив
    arr = arr.slice(size); // ВОПРОС что делает эта строчка?
 }

return newArr;
  //_____________________________________________________________________________________

  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //;
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // should return [["a", "b"], ["c", "d"]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


//________________________________________________________________________________________________

















//_____________________________________________практика, поиск ответов____________________________________________
// var arr = [1, 2, 3];
// delete arr[1];
// console.log(arr);
// var x = arr.flat();
// console.log(x);


// var x = false;
// console.log(typeof x);

// var x = NaN;
// console.log(typeof x);

// function bouncer(arr) {
//     return arr.filter( function(v){return !(v !== v);});
//   }
  
//   console.log( bouncer([false, null, 0, NaN, undefined, ""]));
//   //  [false, null, 0, undefined, ""]


// var x = 5 + 'a';
// var x = false + 5;
// var x = 5 + false;
// var x = 5 + null;
// var x = null + 5;
// var x = undefined + 5;
// console.log(x)



// function reducer(accumulator, currentValue) {
//     console.log(currentValue);
//     accumulator += currentValue;
//     return accumulator;
//     console.log(accumulator);
// } 

// console.log(reducer([1, 2, 3, 4]));


// function f(arr) {
//     return arr.reduce((accum, elem) => {
//         debugger;
//         // console.log(accum);
//         return accum += elem;
//     }, 20)
// }

// console.log(f([1, 2, 3, 4]));
// // console.log(f([[1, 2, 3, 4],[1, 2, 3, 4]]));