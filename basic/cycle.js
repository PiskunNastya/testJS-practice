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
var object = {
    name: 'ololo',
    age: 150,
    isTrue: true
}

for(prop in object) {
    if(object.hasOwnProperty(prop)) {
        if(typeof object[prop] === 'string') {
            delete object[prop];
        }
    }
}

console.log(object);

