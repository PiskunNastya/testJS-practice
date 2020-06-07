alert('21._slice');

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arr2 = arr.slice(3);
console.log(arr2);

var arr3 = arr.slice(-2);
console.log(arr3);


var arr4 = arr.slice();
console.log(arr4);


arr.push(200);
console.log(arr);