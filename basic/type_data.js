alert('type data');

// 1. string

// typeof ('str');
// typeof "foo"



// var str = 'string'; // create
// console.log(str); // read
// str = 'this string' // update
// delete str; // не удалиться
// console.log(str);



// str2 = 'ololo'; // create
// console.log(str2); // read
// str2 = 'ololo222'; // update
// console.log(str2);
// delete str2; // delete
// console.log(str2);




// 2. number



// 3. boolean

// var x = true; // cre
// console.log(typeof x);
// x = false;
// console.log(x);







// 4. тип данных null

// var x = null;
// console.log(typeof x); // object



// 5. undefined




// 6. object

// typeof {}






//  function

// _________________________
// function f(sum) {
//     return sum + sum;
// } 

// console.log(typeof f(4));
// console.log(typeof f());


// typeof function(){}

// typeof function a(){ /* .. */ } === "function";



// var a = 4;
// console.log(a);


const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    age: 26,
    'has-Wife': false,
    fanc: function() {
        return 'вывод консоль';
    }
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person.fanc());
// var value = person.age;
// console.log(value);
var key = 'age';
console.log(person[key]);

person['has-Wife'] = true;
console.log(person);

person.isProgrammer = true;
console.log(person);