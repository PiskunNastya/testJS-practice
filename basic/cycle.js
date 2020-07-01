alert('cycle');


// 1. for 

// var arr = ['кот 1', 'дерево 2', 'небо 3', 'музыка 4'];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     // console.log(arr[i]);
//     newArr.unshift(arr[i]);
// }

// console.log(newArr);

// var arr = ['кот 1', 'дерево 2', 'небо 3', 'музыка 4'];


// for(var i = 0; i <= arr.length - 1; i += 1) {
//     console.log(arr[i]);
// }


// var arr = ['кот 1', 'дерево 2', 'небо 3', 'музыка 4'];


// for(var i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
// }





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




// var arrNew = [];
// var arr = [1, 2, 3, 4, 5, null, 6, 7, 8];
// var currentValue = null;

// // for(var i = 0; i < arr.length; i += 1) {
// //     while(currentValue =  arr[i]) {
// //         arrNew.push(arr[i]);
// //     }
// // }

// while(currentValue = arr.pop()) {
//     arrNew.push(arr.pop());
// }
    
// console.log(arrNew);

// var x = null;
// var num = null;

// console.log(x + num);


// console.log(arr.forEach((elem) => elem));





















//________________________________________________________________________________________________________________________


var arrNew = [];
var arr = [1, 2, 3, 4, 5, null, 6, 7, 8];
var currentValue = null;

while(currentValue = arr.pop()) {
    arrNew.push(arr.pop());
}
    
// console.log(arrNew);




var arrNew2 = [];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
var currentValue2 = null;

while(currentValue2 = arr2.pop()) {
    arrNew2.unshift(arr2.pop());
}

// console.log(arr2);
// console.log(arrNew2);




var arrNew3 = [];
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
var currentValue3;

while(currentValue3 = arr3.pop()) {
    arrNew3.unshift(currentValue3);
}

// console.log(arr3);
// console.log(arrNew3);



var arrNew5 = [];
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
var currentValue5 = 5;

while(currentValue5 = arr5.pop()) {
    arrNew5.unshift(currentValue5);
}

// console.log(arr5);
// console.log(arrNew5);


//1
var arrNew4 = [];
var arr4 = [1, 2, 3, 4, 5, null, 6, 7, 8];
var currentValue4 = null;

while(currentValue4 = arr4.pop()) {
    arrNew4.unshift(currentValue4);
}

// console.log(arr4);
// console.log(arrNew4);


//2
var arrNew5 = [];
var arr5 = [1, 2, 3, 4, 5, 6, undefined, 7, 8];
var currentValue5;

while(currentValue5 = arr5.pop()) {
    arrNew5.unshift(currentValue5);
}

// console.log(arr5);
// console.log(arrNew5);


//3
var arrNew6 = [];
var arr6 = [1, 2, 3, 4, 5, 6, '', 7, 8];
var currentValue6;

while(currentValue6 = arr6.pop()) {
    arrNew6.unshift(currentValue6);
}

// console.log(arr6);
// console.log(arrNew6);

//4
var arrNew7 = [];
var arr7 = [1, 2, 3, 4, 5, 6, 0, 7, 8];
var currentValue7;

while(currentValue7 = arr7.pop()) {
    arrNew7.unshift(currentValue7);
}

// console.log(arr7);
// console.log(arrNew7);


//5
var arrNew8 = [];
var arr8 = [1, 2, 3, 4, 5, 6, NaN, 7, 8];
var currentValue8;

while(currentValue8 = arr8.pop()) {
    arrNew8.unshift(currentValue8);
}

// console.log(arr8);
// console.log(arrNew8);


//6
var arrNew8 = [];
var arr8 = [1, 2, 3, 4, 5, 6, false, 7, 8];
var currentValue8;

while(currentValue8 = arr8.pop()) {
    arrNew8.unshift(currentValue8);
}

// console.log(arr8);
// console.log(arrNew8);



var arrNew9 = [];
var arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
var currentValue9 = 6;

while(currentValue9 = arr9.pop()) {
    arrNew9.unshift(arr9.pop());
}

// console.log(arr9);
// console.log(arrNew9);


var arrNew10 = [];
var arr10 = [1, 2, 3, 4, 5, 6, false, 7, 8];
var currentValue10;

while(currentValue10 = arr10.pop()) {
    // arrNew8.unshift(currentValue8);
    // arrNew10 = [...arrNew10, currentValue10];
    arrNew10 = [currentValue10, ...arrNew10];
}

console.log(arr10);
console.log(arrNew10);

// falsy значения:
// undefined
// null
// ''
// NaN
// false
// 0

//_________________________________________________________________________________________________________________________