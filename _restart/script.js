
// var i = 1;

// for(i = 1; i <= 100; i += 1) {
//     console.log(i);
// }




// var i = 1;

// while(i <= 100) {
//     console.log(i);
//     i += 1;
// }




// var i = 1;

// for(i = 1; i <= 100; i += 1) {

//     if(i % 2 !== 0) {
//         console.log(i);
//     }

// }



// var i;

// for(i = 100; i >= 1; i -= 1) {
//     console.log(i);
// }



// function sum(a, b) {
//     return a + b;
// }

// function first() {
//     return 3;
// }

// function second() {
//     return 4;
// }

// console.log(sum(first(), second())); 





// function sum(a, b) {
//     return a() + b();
// }

// function first() {
//     return 3;
// }

// function second() {
//     return 4;
// }

// console.log(sum(first, second));
// console.log(first);


// var obj = {
//     name: 'Ololo',
//     age: 24,
//     isAdmin: true
// }

// console.log(obj);

// obj.isAdmin = false;

// console.log(obj);

// delete obj.isAdmin;

// console.log(obj);






// var obj = {
//     one: 1
// }

// function f(object, key, value) {
//     // object.key = value;

//     object[key] = value;
// }


// f(obj, 'second', 2);

// // console.log(obj);


// for(keys in obj) {
//     // console.log(obj[keys]); // значения

//     console.log(keys);


// }




// var obj = {
//     name: 'Lora'
// };

// var clone = {

// };

// for(keys in obj) {
//     clone[keys] = obj[keys];
// }

// console.log(clone);





// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     fn: function() {
//         return this.a + this.b + this.c;
//     }
// }

// console.log(obj.fn());



// var arr = [1, 2, 3];

// arr.push(4);

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr); 

// arr.pop();

// console.log(arr);





var arr = [1, 'cat', 2, 'cat', 3];

// метод реверс