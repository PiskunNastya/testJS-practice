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



function func() {
    var i = 1;
    
    return function f() {
        return i++;
    }
}

var x = func();

console.log(x());
console.log(x());
console.log(x());