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
  
//    var newArr = [];
  
//    for(var i = 0; i <= arr.length - 1; i += 1) {
//       newArr.push(arr.slice(0, size)); // slice возвращяет новый массив размером указанном в аргументах, и мы егопушим в новый массив
//       arr = arr.slice(size); // ВОПРОС что делает эта строчка?
//    }
  
//   return newArr;
//     //_____________________________________________________________________________________
  
//     }
    
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //;
//   // console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // should return [["a", "b"], ["c", "d"]].
//   // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
//   // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].
  // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
  // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
  // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
  
  
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