alert('17._sort');


var arr = [20, 5, 13, 19, 2, 1, 9];

var arr2 = arr.sort((a, b) => a - b);

console.log(arr);
console.log(arr2);

arr.push(1000);
arr2.push(200000);

console.log(arr);
console.log(arr2);