alert('16._some')


function stringFunc(elem) {
    return typeof elem === 'string';
}

var str = ['ololo', 'ololo2', "ololo3"];
var strNot = ['ololo', 'ololo2', 4];
var strNot2 = [1, 2, 4];

console.log(str.some(stringFunc));
console.log(strNot.some(stringFunc));
console.log(strNot2.some(stringFunc));


var x = strNot2.indexOf(2);
console.log(x);