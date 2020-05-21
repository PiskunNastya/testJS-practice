alert('context');

// var obj2 = {
//     a: 42,
//     foo: fn
// }

// var obj1 = {
//     a: 5,
//     obj2: obj2
// }

// function fn() {
//     console.log(this);
// }

// obj1.obj2.foo();
// obj2.foo();


//______________________________________________________________


// var obj2 = {
//     a: 42,
//     foo: fn
// }

// var obj1 = {
//     a: 5,
//     obj2: obj2
// }

// function fn() {
//     console.log(this.a);
// }

// obj1.obj2.foo();
// obj2.foo();

//______________________________________________________________

//___________________________теряем контекст_____________________________________________

// var obj = {
//     a: 2, 
//     foo: fn
// }

// function fn() {
//     console.log(this.a)
// }

// var result = obj.foo;
// // console.log(result);
// result();

//_____________________________решение 1 убрать перемунную_________________________________

// var obj = {
//     a: 2, 
//     foo: fn
// }

// function fn() {
//     console.log(this.a)
// }


// // console.log(result);
// obj.foo();

//_____________________________решение 2 методом_________________________________

var obj = {
    a: 2, 
    foo: fn
}

function fn() {
    console.log(this.a)
}

var result = obj.foo.bind(obj);
// console.log(result);
result();