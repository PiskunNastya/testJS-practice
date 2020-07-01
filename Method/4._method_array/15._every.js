alert('15._every');

//______________________________________________________________________

// function fuck(elem) {
//     // console.log(elem);
//     return elem >= 10;
// }

// var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arr2 = [11, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// var arr3 = [0, 1, 20, 3, 40, 5, 60, 7, 80, 9, 100];

// console.log(arr1.every(fuck));
// console.log(arr2.every(fuck));
// console.log(arr3.every(fuck));
// console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every(fuck));
// console.log([12, 54, 18, 130, 44].every(fuck));

//______________________________________________________________________

//______________________________________________________________________

// function isBigEnough(element, index, array) {
//     return element >= 10;
// }


//  console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
//  console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true



//______________________________________________________________________

//______________________________________________________________________

function stringFunc(elem) {
    return typeof elem === 'string';
}

var str = ['ololo', 'ololo2', "ololo3"];
var strNot = ['ololo', 'ololo2', 4];
var strNot2 = [1, 2, 4];

console.log(str.every(stringFunc));
console.log(strNot.every(stringFunc));
console.log(strNot2.every(stringFunc));


//______________________________________________________________________

