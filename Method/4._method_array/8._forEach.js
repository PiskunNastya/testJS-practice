alert('forEach');

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));




// 1. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

// 1.1. c помощью метода map()

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newArr = arr.map(currentValue => currentValue * currentValue);

// console.log(newArr);



// 2.2. с помощью цикла for()

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     var sum = arr[i] * arr[i];
//     newArr.push(sum);
// }

// console.log(newArr);



// 2.3

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];

// arr.forEach((currentValue) => {
//     var sum = currentValue * currentValue;
//     newArr.push(sum);
// });

// console.log(newArr);


// 2.4

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// arr.forEach(function(elem) {
// 	newArr.push(elem * elem);
// });
// console.log(newArr); 



// 2. Дан массив с числами. Найдите сумму этих чисел.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var accumulate = 0;

// var x = arr.forEach((currentValue) => {
//     accumulate += currentValue;
// });

// console.log(arr);
// console.log(accumulate);
// console.log(x);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// var x = arr.forEach((currentValue) => {
//     return currentValue + 10;
// });

// console.log(arr);
// console.log(x);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// var x = arr.forEach(currentValue => currentValue + 10);

// console.log(arr);
// console.log(x);



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// var x = arr.forEach(currentValue => console.log(currentValue + 10));

// console.log(arr);
// console.log(x);


var arr = [1, 2, 3, 4, 5, 6];

var x = arr.forEach(function(value) {
    return value + 10;
});

console.log(arr);
console.log(x);

