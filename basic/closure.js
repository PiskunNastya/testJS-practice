alert('closure');

// function a(a1) {
//     var a2 = 1;
//     return function b(b1) {
//         var b2 = 1;
//         return function c(c1) {
//             var c2 = 1;
//             return a1 + b1 + c1 + a2 + b2 + c2;
//         }
//     }
// }

// console.log(a(1)(1)(1));




// function a(a1) {
//     var a2 = 1;
//     return function b(b1) {
//         var b2 = 1;
//         return a1 + b1 + a2 + b2 + c2;

//         return function c(c1) {
//             var c2 = 1;
//             return a1 + b1 + c1 + a2 + b2 + c2;
//         }
//     }
// }

// console.log(a(1)(1)(1));



// function func() {
//     var i = 1;
    
//     return function f() {
//         return ++i;
//     }
// }

// console.log(func());
// console.log(func());
// console.log(func());



// function func() {
//     var i = 1;
    
//     return function f() {
//         return i += 1;
//     }
// }

// console.log(func()());
// console.log(func()());
// console.log(func()());



// function func() {
//     var i = 1;
    
//     return function f() {
//         return i++;
//     }
// }

// var x = func();

// console.log(x());
// console.log(x());
// console.log(x());


// function a(){
//     var i = 1;

//     return function() {
//         return ++i;
//     }
// }

// console.log(a()());
// console.log(a()());
// console.log(a()());

// __________________________________________________________________________________________________

// function a(){


//     return function() {
//         return ++i;
//     }
// }

// console.log(a()());
// console.log(a()());
// console.log(a()());

// __________________________________________________________________________________________________






// __________________ЗАДАЧИ НА ЗАМЫКАНИЕ________________________________________________________________________________
// http://old.code.mu/tasks/javascript/advanced/prodvinutaya-rabota-s-funkciyami-javascript.html

//______________________________________________________________________________________________________________________
// Сделайте функцию, которая считает и выводит количество своих вызовов.

// var i = 1;

// function fuck() {
//     return i++;

// }

// console.log(fuck());
// console.log(fuck());
// console.log(fuck());

//___________________________________________

// var x = fuck();

// function fuck() {
//     var i = 1;

//     return function() {
//         return i++;
//     }

// }



// console.log(x());
// console.log(x());
// console.log(x());


//______________________________________________________________________________________________________________________

var a = 1;

function func() {
    return a++;
}

// a += 1
// a = a + 1;

console.log(func());
console.log(func());
console.log(func());



function func1() {
    var a = 0;
    return function() {
        a = a + 1;
        return a;
    }
}

var b = func1();

console.log(b);
console.log(b());
console.log(b());







// __________________ЗАДАЧИ НА ЗАМЫКАНИЕ________________________________________________________________________________




