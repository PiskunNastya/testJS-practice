alert('cycle');


// 1. for 

var arr = ['кот 1', 'дерево 2', 'небо 3', 'музыка 4'];
var newArr = [];

for(var i = 0; i <= arr.length - 1; i += 1) {
    // console.log(arr[i]);
    newArr.unshift(arr[i]);
}

console.log(newArr);