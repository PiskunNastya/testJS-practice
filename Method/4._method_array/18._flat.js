alert('flat');

var arr = [1, [20, 22], [30, 33], [40, 44, [46, 47]]];

var x = arr.flat();

console.log(arr);
console.log(x);

var y = x.flat();



console.log(arr);
console.log(x);
console.log(y);

arr.unshift('ololo');
console.log(arr);