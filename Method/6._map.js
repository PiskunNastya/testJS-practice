alert('map');

// 1. умножить каждый элемент массива на 2

// 1.1.1 map под капотом, решение циклом for

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
// }

// console.log(newArr);



// 1.1.2 map под капотом, решение циклом while

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];
// var i = 0;

// while(i <= arr.length - 1) {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
//     i += 1;
// }

// console.log(newArr);




// 1.1.3 map под капотом, решение циклом do...while

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];
// var i = 0;

// do {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
//     i += 1;
// } while(i <= arr.length - 1);

// console.log(newArr);




// 1.2.1 решение с помощью метода map

// var arr = [1, 2, 3, 4, 5];

// var newArr = arr.map(function(arr) {
//     return arr * 2;
// })

// console.log(newArr);





// 1.2.2 решение с помощью метода map

var arr = [1, 2, 3, 4, 5];

var newArr = arr.map((arr) => arr * 2);

console.log(newArr);





// 2. создать массив содержащий квадратные корни чисел

// var arr = [0, 64, 121, 289];

// var newArr = arr.map(Math.sqrt);

// console.log(newArr);




// 3. использование map для переворачивания строки


// var str = '12345';
// var t = [].map.call(str, function(x) {
//     return x;
// }).reverse().join();

// console.log(str);
// console.log(t);





// 4. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// var arr = [2, 4, 6, 8];

// var dubl = arr.map(function(x) {
//     return x * x;
// });

// console.log(arr);
// console.log(dubl);