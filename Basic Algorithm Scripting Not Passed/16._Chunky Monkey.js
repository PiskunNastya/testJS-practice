alert('16._Chunky Monkey');

// Скриптинг основного алгоритма: Коренастая обезьяна

// Напишите функцию, которая разбивает массив (первый аргумент) 
// на группы длиной size(второй аргумент) и возвращает их в виде двумерного массива.


//_______________________________________________________________________________________________________

// function chunkArrayInGroups(arr, size) {


//     var newArr = [];
//     var newAAAAArray = [];


//     for(var j = 0; j < arr.length; j += 1) {

//         if(newAAAAArray.length === size) {
//             newArr.push(newAAAAArray);
//             newAAAAArray = [];
//             newAAAAArray.push(arr[j]);
//             if(arr.length - 1 === arr.indexOf(arr[j])) {
//                 newArr.push(newAAAAArray);
//             }
//         } else if (arr.length - 1 === arr.indexOf(arr[j])) {
//                 newAAAAArray.push(arr[j]);
//                 newArr.push(newAAAAArray);
//         } else {
//             newAAAAArray.push(arr[j]);
//         }

//     }

//     return newArr;
   
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // должен вернуться [["a", "b"], ["c", "d"]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // должен вернуться [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // должен вернуться [[0, 1, 2], [3, 4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // должен вернуться [[0, 1], [2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // должен вернуться [[0, 1, 2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // должен вернуться [[0, 1, 2], [3, 4, 5], [6]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // должен вернуться [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


//_______________________________________________________________________________________________________

//_______________________________________________________________________________________________________

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var indStart = 0;
    var indexEnd = size;

    for(var j = 0; j < arr.length / size; j += 1) {
        
            var x = arr.slice(indStart, indexEnd);
            newArr.push(x);

            indStart += size;
            indexEnd += size;
    } 

    return newArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // должен вернуться [["a", "b"], ["c", "d"]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // должен вернуться [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
// console.log(chunkArrayInGroups([1, 2, 3, 4], 2));
// console.log(chunkArrayInGroups([1, 2, 3], 2)); 
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 2)); 
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2)); 
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7], 2)); 
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8], 2));
// console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // должен вернуться [[0, 1, 2], [3, 4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // должен вернуться [[0, 1], [2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // должен вернуться [[0, 1, 2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // должен вернуться [[0, 1, 2], [3, 4, 5], [6]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // должен вернуться [[0, 1, 2, 3], [4, 5, 6, 7], [8]].


//_______________________________________________________________________________________________________



   //____________________________________________________

    // for(var j = 0; j < arr.length; j += 1) {
    //     var x = arr.splice(0, size);
    //     newArr.push(x);
    // }

    // for(var j = 0; j < arr.length; j += 1) {
       
    //     if(arr.length !== size - 1) {
    //         var x = arr.splice(0, size - 1);
    //         newArr.push(x);
    //     } else {
    //         var x = arr.splice(0, size);
    //         newArr.push(x);
    //     }

    // }

    //____________________________________________________
    //____________________________________________________

    // for(var j = 0; j < arr.length; j += 1) {
    //     var x = arr.splice(0, size);
    //     newArr.push(x);

    //     if(arr.length < size) {
    //         var x = arr.splice(0, arr.length);
    //         newArr.push(x);
    //     }
        
    // }

    //____________________________________________________

    //____________________________________________________

    // for(var j = 0; j < arr.length; j += 1) {
    //     debugger;

    //     if(arr.length < size) {
    //         var x = arr.splice(0, arr.length);
    //         newArr.push(x);
    //     } else {
    //         var x = arr.splice(0, size);
    //         newArr.push(x);
    //     }
        
    // }

    //____________________________________________________
    //____________________________________________________

    // var indStart = 0;
    // var indexEnd = size;

    // for(var j = 0; j < arr.length / size; j += 1) {
        
    //         var x = arr.slice(indStart, indexEnd);
    //         newArr.push(x);

    //         indStart += size;
    //         indexEnd += size;
    // }

    //____________________________________________________

    //____________________________________________________

        // var indStart = 0;
        // var indexEnd = size;
    
        // for(var j = 0; j < arr.length; j += 1) {
        //     // debugger;

        //     // if(arr[arr.length - 1]) {
        //     //     indStart = 0;
        //     //     indexEnd = 0;
        //     // } else {
        //     //     var x = arr.slice(indStart, indexEnd);
        //     //     newArr.push(x);
    
        //     //     indStart += size;
        //     //     indexEnd += size;
        //     // }

        //      if(arr[size - 1]) {
        //         var x = arr.slice(indStart, indexEnd);
        //         newArr.push(x);
    
        //         indStart += size;
        //         indexEnd += size;
        //     } else if (arr[arr.length - 1]) {
        //         indStart = 0;
        //         indexEnd = 0;
        //     }
                
        // }
    
    //____________________________________________________


