alert('cycle');


// 1. for 

// var arr = ['кот 1', 'дерево 2', 'небо 3', 'музыка 4'];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     // console.log(arr[i]);
//     newArr.unshift(arr[i]);
// }

// console.log(newArr);




// 2. for

// var arr = ['mazda', 'ford', 'Mers'];

// for(let i = 0; i <= arr.length - 1; i += 1) {
//     console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
// }




// 3
// var object = {
//     name: 'ololo',
//     age: 150,
//     isTrue: true
// }

// for(prop in object) {
//     if(object.hasOwnProperty(prop)) {
//         if(typeof object[prop] === 'string') {
//             delete object[prop];
//         }
//     }
// }

// console.log(object);




// 4

// var obj = {
//     num1: 1,
//     num2: 2,
//     num3: 3, 
//     num4: 4,
//     str1: 'ololo_1',
//     str2: 'ololo_2',
//     str3: 'ololo_3',
//     str4: 'ololo_4'
// }

// // for(keys in obj) {
// //     if(obj.hasOwnProperty(keys)) {
// //         if(typeof obj[keys] === 'string') { // удаляет значение стипом данных 'строка' с объекта
// //             delete obj[keys];
// //         }
// //     }
// // }


// for(keys in obj) {
//     if(obj.hasOwnProperty(keys)) {
//         if(typeof obj[keys] === 'number') { // удаляет значение стипом данных 'число' с объекта
//             delete obj[keys];
//         }
//     }
// }



// console.log(obj);