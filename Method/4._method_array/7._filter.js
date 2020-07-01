alert('filter');

// 1. Дан массив с числами. Оставьте в нем только отрицательные числа

// var arr = [1, 2, -30, -5, 6, -9, 6];

// var x = arr.filter(currentValue => currentValue < 0);

// console.log(x);





// 2. Дан массив с числами. Оставьте в нем только четные числа.

// 2.1

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newArr = arr.filter(currentValue => currentValue % 2 === 0)

// console.log(newArr);


// 2.2

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var newArr = arr.filter(function(currentValue) {
//     return currentValue % 2 === 0;
// });

// console.log(newArr);


// 2.3

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     // console.log(arr[i]);
//     if(arr[i] % 2 === 0){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);








// 3. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// 3.1

// var strArr = ['123456789', '123', '1234567', '12', '1234', '123456', '12345'];

// var newArr = strArr.filter(currentValue => currentValue.length > 5);

// console.log(newArr);



// 3.2

// var strArr = ['123456789', '123', '1234567', '12', '1234', '123456', '12345'];

// var newArr = strArr.filter(function(currentValue) {
//     return currentValue.length > 5;
// })

// console.log(newArr);




// 3.3

// var strArr = ['123456789', '123', '1234567', '12', '1234', '123456', '12345'];
// var newArr = [];

// for(var i = 0; i <= strArr.length - 1; i += 1) {
//     if(strArr[i].length > 5) {
//         newArr.push(strArr[i]);
//     }
// }

// console.log(newArr);









// 4. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

// 4.1

// var arr = [1, 2, [3, 4], 5, [6, 7]];

// var newArr = arr.filter(currentValue => Array.isArray(currentValue));

// console.log(newArr);



// 4.2

// var arr = [1, 2, [3, 4], 5, [6, 7]];

// function func(elem) {
//     return Array.isArray(elem);
// }

// var newArr = arr.filter(func);

// console.log(newArr);




// 5. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// 5.1

// var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// var num = 0;

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     // console.log(arr[i]);

//     if(arr[i] < 0) {
//         num += 1;
//     }
// }

// console.log(num);



// 5.2

// var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// var accumulate = 0;

// function func(elem) {
//     if(elem < 0) {
//        accumulate += 1; 
//     }
// }

// var sum = arr.filter(func);

// console.log(sum);



// 5.3

// var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// var accumulate = 0;

// var sum = arr.filter(function(currentValue) {
//     if(currentValue < 0) {
//         accumulate += 1;
//     }
// })

// console.log(sum);

// 5.4.1

// var arr = [5, -3, 6, -5, 0, -7, 8, 9];
// function func(elem){
//     return elem < 0;
// }

// // console.log(func(4));
// var newArr = arr.filter(func);
// console.log(newArr.length);







// 5.4.2

// var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// function func(currentValue) {
//     return currentValue < 0;
// }

// var newArr = arr.filter(func);

// console.log(newArr.length);







// 5.4.3

// function funcNum(arr) {

//     function func(elem) {
//         return elem < 0;
//     }

//     var newArr = arr.filter(func);
//     console.log(newArr.length);
// }

// funcNum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]);
// funcNum([1, 2, 3, -4, 5, -6, 7, -8, 9, -10]);
// funcNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




// 5.4.4
// function funcNum(arr) {
//     var newArr = arr.filter(elem => elem < 0);
//     console.log(newArr.length);
// }



// funcNum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]);
// funcNum([1, 2, 3, -4, 5, -6, 7, -8, 9, -10]);
// funcNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 6. Вывести слова которые содержат больше 6 букв.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// var x = words.filter(word => word.length > 6);

// var x = words.filter((word) => word.length > 6);

// var x = words.filter(function(word) {
//      return word.length > 6;
// });

// console.log(x);





var arr = ['ololo', 20, 'foo', 33, 'soryan', 60];
var filterArray = arr.filter(function(value) {
    return typeof value === 'string' ? true : false;
});

console.log(arr);
console.log(filterArray);

arr.push('rack');
filterArray.push('ppp');

console.log(arr);
console.log(filterArray);