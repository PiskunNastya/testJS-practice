alert('Sort the odd');

// function sortArray(array) {
//     if(array.length === 0) {
//         return array;
//     }

//     for(var i = 0; i < array.length; i += 1) {
//         if(array[i] % 2 !== 0) {

//         }
//     }

// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([]));




// Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// Test.assertSimilar(sortArray([]),[])





// var arr = [102, 2, 1, 10, 55, 25];
// var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// var result = arr.sort(function(a, b){
//     return a - b;
// });
// console.log(result);



// function f(num) {
//     return num % 2 === 0;
// }

// console.log(f(6));
// console.log(f(3));


//________________________________________________________________________________________________
// 1.

// var array = [5, 3, 2, 8, 1, 4],
//     indices = [];

// array
//     .filter((v, i) => v % 2 && indices.push(i))
//     .sort((a, b) => a - b)
//     .forEach((v, i) => array[indices[i]] = v);

// console.log(array); //[1, 3, 2, 8, 5, 4]


var array = [5, 3, 2, 8, 1, 4],
    indices = [];


// var result_filter = array.filter((v, i) => v % 2 && indices.push(i));

var result_filter = array.filter(function(elem, index) {
    if(elem % 2 !== 0) {
        return indices.push(index);
    }
});

console.log(result_filter); 
console.log(indices); 





var result_sort = result_filter.sort((a, b) => a - b);
// console.log(result_sort); 

result_sort.forEach((v, i) => array[indices[i]] = v);

// console.log(array); //[1, 3, 2, 8, 5, 4]

//________________________________________________________________________________________________



//________________________________________________________________________________________________
// 2.

// const array = [5, 3, 2, 8, 1, 4]; //to: [1, 3, 2, 8, 5, 4] - [1, 3, 2, 8, 5, 4]

// function sortOddsOnly(arr) {
//     const odds = arr
//         .filter(x => x%2)
//         .sort((a, b) => a - b);
        
//     return arr
//         .map(x => x%2 ? odds.shift() : x);
// }

// console.log(sortOddsOnly(array));
//________________________________________________________________________________________________






//________________________________________________________________________________________________
// 3.

// const arr = [5, 3, 2, 8, 1, 4];

// const odd = arr.filter(i => i%2 !== 0).sort();
// let i = 0,
//   result = [];
// arr.forEach(e => {
//   if (e%2 === 0) {
//     result.push(e)
//   } else {
//     result.push(odd[i]);
//     i++;
//   }
// });

// console.log(result);
//________________________________________________________________________________________________




//________________________________________________________________________________________________
// 4.

// var xs = [5, 3, 2, 8, 1, 4];

// console.log(sortOddsOnly(xs));

// function sortOddsOnly (xs) {
//   var n = xs.length;
//   for (var i = 0; i < n - 1; i++) {
//     if (xs[i] % 2 === 1) {
//       for (var j = i + 1; j < n; j++) {
//         if (xs[j] % 2 === 1) {
//           if (xs[i] > xs[j]) {
//             var min = xs[j];
//             xs[j] = xs[i];
//             xs[i] = min;
//           }
//         }
//       }
//     }
//   }
//   return xs;
// }
//________________________________________________________________________________________________



