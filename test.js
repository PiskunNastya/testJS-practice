alert('test');

// var arr = [1, 2];
// console.log(typeof arr);


// var arr = [1, 2, 3];
// // var arr = new Array(1, 2, 3);
// // console.log(arr);

// arr[0] = 'car';
// console.log(arr);










// var a_1_str2 = 'ololo';
// var a_2_num = 42;
// var a_3_bul = true;
// var a_4_x = null;
// var a_5_not;

// var a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// var a_7;
// var a_8_str = 'hello';



// let a_1_str2 = 'ololo';
// let a_2_num = 42;
// let a_3_bul = true;
// let a_4_x = null;
// let a_5_not;

// let a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// let a_7;
// let a_8_str = 'hello';



// const a_1_str2 = 'ololo';
// const a_2_num = 42;
// const a_3_bul = true;
// const a_4_x = null;
// // const a_5_not;

// const a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// // const a_7;
// const a_8_str = 'hello';





// ---1---_____________________________________копирование по значению_____________________________
// str1 = true;
// str2 = str1;
// str1 = false;

// console.log(str1, str2);
// ________________________________________________________________________________________________




// ---2---_____________________________________копирование объекта____________________________

// var obj = {
//     name: 'Ned =)',
//     isHomer: false
// }

// var newObj = {};

// for(keys in obj) {
//     if(obj.hasOwnProperty(keys)) {
//         newObj[keys] = obj[keys];
//     }
// }

// newObj.whatHeWant = 'car';

// console.log(newObj);
// console.log(obj);

// ________________________________________________________________________________________________


// ---3---_____________________________________CRUD array__________________________________________

// var arr = [1, 2, 3, 'hello', true, null, function() {}];

// console.log(arr[3]);

// arr[1] = 20;

// console.log(arr);


// ________________________________________________________________________________________________






// ---4---_____________________________________5 элемент в квадрат_________________________________

// var arr = [1, 2, 3, 4, 5];
// var i;
// var len = arr.length - 1;

// for(i = 0; i <= len; i += 1) {

//     if(i === 2) {
//         arr[i] = arr[i] ** 2;
//     }

// }

// console.log(arr);

// ________________________________________________________________________________________________



// ---5.1---_____________________________________среднее значение ___________________________________

// var arr = [25, 60, 5];

// var sum = arr.reduce((accumulator, currentvalue) => accumulator += currentvalue);

// var result = sum / arr.length


// console.log(result);


// ________________________________________________________________________________________________


// ---5.2---_____________________________________среднее значение___________________________________

// var arr = [25, 60, 5];

// var i;
// var len = arr.length - 1;
// var accumulator = 0;

// for(i = 0; i <= len; i += 1) {
//     accumulator += arr[i];
// }

// var result = accumulator / arr.length

// console.log(result);


// ________________________________________________________________________________________________