alert('21._splice');

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var x = arr.splice(2, 0, 'ololo');
console.log(x);
console.log(arr);


var x2 = arr.splice(0, 1); // с 0 индекса, удаляем 1 элемент
console.log(x2);
console.log(arr);