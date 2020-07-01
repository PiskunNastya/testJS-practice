alert('#6 – Опережающие и ретроспективные проверки, а также альтернация');

// var regexp = /b|d/g
// var str = 'abcdef';

// var result = str.match(regexp);
// console.log(result);


// var regexp = /\d\d.\d\d/g
// var regexp = /(?:[01]\d|2[0-3]):[0-5]\d/g
// var str = 'Завтрак в 09:15. Обед в 81:45. Ужин в 19:20 cat';

// var result = str.match(regexp);
// console.log(result);


var regexp = /(?:[01]\d|2[0-3]):[0-5]\d/g
var str = 'Завтрак в 09:15. Обед в 81:45. Ужин в 19:20 cat';

var result = str.match(regexp);
console.log(result);

