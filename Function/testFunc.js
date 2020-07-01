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

// var arr = [25, 60, 5];

// function average(array, base) {
//     array.forEach((currentValue) => {
//         base += currentValue;
//     })
//     return base / array.length;
// }

// function sum(array) {
//     var base = 0;
//     return average(array, base);
// }

// console.log(sum(arr));


// __________________________________________________________________________________________________



// ---7---___________________________________________________________________________________________

// var obj = {
//     name: 'OLOLO'
// }

// function add(object, key, value) {
//     object[key] = value;
// }

// add(obj, 'age', 24);
// console.log(obj);

// __________________________________________________________________________________________________


// var obj1 = {
//     a: 2,
//     fn: foo
// }

// var obj2 = {
//     a: 30,
//     fn: foo
// }

// function foo() {
//     console.log(this.a);
// }

// foo.call(obj1);
// foo.call(obj2);

// __________________________________________________________________________________________________


// var obj1 = {
//     a: 2,
//     fn: foo
// }


// function foo(x) {
//     console.log(this.a, x);
// }

// // пишем полифил bind
// function bind(fn, context, arg) {
//     return function(){
//         return fn.call(context, arg);
//     }
// }

// var result = bind(foo, obj1, 'text');
// result();

// console.log(result);

// __________________________________________________________________________________________________


// var obj1 = {
//     a: 2,
//     fn: foo
// }


// function foo(x) {
//     console.log(this.a, x);
// }

// var result = foo.bind(obj1, 3);
// console.log(result());

// console.log(result);

// __________________________________________________________________________________________________







// ________________ПОТЕРЯ КОНТЕКСТА__________________________________________________________________________________

// var obj = {
//     a: 2,
//     foo: fn
// }


// function fn() {
//     console.log(this.a);
// }

// var result = obj.foo;
// console.log(result);
// result();

//__________________________ИСПРАВЛЕНО

// var obj = {
//     a: 2,
//     foo: fn
// }


// function fn() {
//     console.log(this.a);
// }

// obj.foo();


//__________________________ИСПРАВЛЕНО

// var obj = {
//     a: 2,
//     foo: fn
// }


// function fn() {
//     console.log(this.a);
// }

// fn.call(obj);


//__________________________ИСПРАВЛЕНО

// var obj = {
//     a: 2,
//     foo: fn
// }

// var obj2 = {
//     a: 40,
//     foo: fn
// }


// function fn() {
//     console.log(this.a);
// }

// var x = fn.bind(obj);

// x();


// ________________ПОТЕРЯ КОНТЕКСТА__________________________________________________________________________________




//___________________________________________________________________________________________________________________


// var x = setTimeout(function() {
//     console.log('ololo');
// }, 2000);

// console.log(x);



//___________________________________________________________________________________________________________________

//___________________________________________________________________________________________________________________

// var object = {
//     a1: 20,
//     a2: 50,
//     b: 'ololo',
//     fanc: function() {
//         console.log(this.a1 + this.a2);
//     }
// }


// setTimeout(function() {
//       return object.fanc();
// }, 2000); 

//_________________________________________

// var object = {
//     a1: 20,
//     a2: 50,
//     b: 'ololo',
//     fanc: function() {
//         console.log(this.a1 + this.a2);
//     }
// }

// var x = object.fanc.bind(object);


// setTimeout(x, 2000); 

//_________________________________________

// var object = {
//     a1: 20,
//     a2: 50,
//     b: 'ololo',
//     c: fanc
// }

// function fanc() {
//     console.log(this.a1 + this.a2);
// }

// setTimeout(function() {
//       return object.c();
// }, 2000); 

//_________________________________________

// var object = {
//     a1: 20,
//     a2: 50,
//     b: 'ololo',
//     c: fanc
// }

// function fanc() {
//     console.log(this.a1 + this.a2);
// }

// var x = object.c.bind(object);

// setTimeout(x, 2000); 

//__________________________________________________________________________________________________

// var c = 10;

// var obj = {
//     a: 3,
//     b: 4
// }

// function func() {
//     return obj.a + obj.b;
// }

// function func2() {
//     return obj.a * window.c;
// }


// console.log(func());
// console.log(func2());

//__________________________________________________________________________________________________

// function func(a, b) {
//     return a + b;
// }

// var x = func.bind(null, 2);

// console.log(x(2));

//__________________________________________________________________________________________________

// function partial(func, ...argsBound) {
//     return function(...args) { // (*)
//         console.log(this);
//       return func.call(this, ...argsBound, ...args);
//     }
// }
  
//   // использование:
// let user = {
//     firstName: "John",
//     say(time, phrase) {
//       alert(`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// };
  
//   // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  
// user.sayNow("Hello");
//   // Что-то вроде этого:
//   // [10:00] John: Hello!

  //__________________________________________________________________________________________________

//   function f() {
//     alert( this ); // null
//   }
  
//   let user = {
//     g: f.bind(null)
//   };
  
//   user.g();

  //__________________________________________________________________________________________________

//   function f() {
//     //   console.log(this);
//       return this;
//   }

//   f();

// f.test = 5;

// console.log(f);
// console.log(f.test);



//   var f = 10;
// //   console.log(f);
// //   console.log(f());

//   __________________________________________________________________________________________________

//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//   __________________________________________________________________________________________________

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//   __________________________________________________________________________________________________


















//   __________________________________________________________________________________________________

// function askPassword(ok, fail) {                            
//     // простая функция, вызывающяя prompt, и записывающая в пе переменную пароль
//     //если пароль верный, выполняеться функция переданная аргументом, параметр - ok
//     //если неверный, выполняеться функция переданная аргументом, параметр - fail


//     var password = prompt("Password?", '');

//     if (password == "rockstar") {
//         ok();
//     } else {
//         fail(); 
//     } 

//   }
  


//   var user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


  //______________________________________________

  function askPassword(ok, fail) {                            
    // простая функция, вызывающяя prompt, и записывающая в пе переменную пароль
    //если пароль верный, выполняеться функция переданная аргументом, параметр - ok
    //если неверный, выполняеться функция переданная аргументом, параметр - fail


    var password = prompt("Password?", '');

    if (password == "rockstar") {
        ok();
    } else {
        fail(); 
    } 

  }
  


  var user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(this.name + ' failed to log in');
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


  //______________________________________________

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."


var a1 = 5;
var b1 = 10;
console.log('Fifteen is ' + (a1 + b1) + ' and not ' + (2 * a1 + b1) + '.');
// "Fifteen is 15 and not 20."