alert('testFunc');


// ---1---______________________________________________________________________________________________________
// function age(birthYear) {
//     return 2020 - birthYear;
// }

// function result(name, year) {

//     var ageNow = age(year);

//     console.log('Имя его ' + name + ' ему лет ' + ageNow);
// }

// result('Vladilen', 1993);




// ---2---______________________________________________________________________________________________________
// function simple() {
//     return console.log('aaaa!')
// }


// simple();




// ---3.1---______________________________________________________________________________________________________

// function func(obj, key) {

//     for(var keys in obj) {

//         if(keys === key) {
//            return obj[keys];
//         } 

//     }

//     return 'Not Faund';

// }

// console.log(func({name: 'Nastya', age: 28}, 'age')) ;
// console.log(func({name: 'Nastya', age: 28}, 'name')) ;
// console.log(func({name: 'Nastya', age: 28}, 'age')) ;
// console.log(func({name: 'Nastya', age: 28}, 'ololo')) ;



// ---3.2---______________________________________________________________________________________________________


// function func(obj, key) {

//     if(obj.hasOwnProperty([key]) === false) {
//         obj[key] = 'Not Faund';
//     }

//     return obj[key];

// }

// console.log(func({name: 'Nastya', age: 28}, 'age')) ;
// console.log(func({name: 'Nastya', age: 28}, 'name')) ;
// console.log(func({name: 'Nastya', age: 28}, 'age')) ;
// console.log(func({name: 'Nastya', age: 28}, 'ololo')) ;



// ---4.1---_________________Function Declaration_____________________________________________________________________________________

// function func(a, b) {
//     return a + b;
// }

// console.log(func(2, 2));



// ---4.2---_________________Function Expression_____________________________________________________________________________________

// var func = function(a, b) {
//     return a + b;
// }

// console.log(func(2, 2));


// ---4.3---_________________Immediately Invoked Function Expretion - IIFE - самовызывающиеся функция _______________________________

// (function(a, b) {
//     return a + b;
// }(2, 2));



// ---5---_________________Функция добавляющая в объект новые свойства _______________________________

// var obj = {
//     name: 'Nastya',
//     age: 28,
//     isAdmin: true
// }

// function func(object, key, value) {
//     object[key] = value;
// }

// console.log(func(obj, 'hasDog', true));

// console.log(obj);

// __________________________________________________________________________________________________



// ---6---___________________________________________________________________________________________

var arr = [25, 60, 5];

function average(array, base) {
    array.forEach((currentValue) => {
        base += currentValue;
    })
    return base / array.length;
}

function sum(array) {
    var base = 0;
    return average(array, base);
}

console.log(sum(arr));


// __________________________________________________________________________________________________






