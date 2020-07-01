alert('reverse');

// var arr = [1, 2, 3, 4, 5];
// var x = arr.reverse();
// console.log(arr);
// console.log(x);


// arr.push('ololo');
// console.log(arr);
// console.log(x);


// x.push('oook');
// console.log(arr);
// console.log(x);

//________________________________________________________________________________


// var arr = [1, 2, 3, 4];
// var x = arr.reverse();

// console.log(arr);
// console.log(x);

// arr.push('ololo');
// console.log(x);


//_________________________Полифил, метод реверс руками_______________________________________________________


// var array = [1, 2, 3, 4, 5, 6];
// array.unshift(200);
// var len = array.length - 1;
// var i;
// var newArr = [];

// for(i = 0; i < len; i += 1) {
//     var x = array.pop();
//     newArr.push(x);
// }

// console.log(newArr);

//_____________________________________________________

// var array = [1, 2, 3, 4, 5, 6];
// var i;
// var ind0 = array[0];
// var ind1 = array[1];
// var ind2 = array[2];
// var ind3 = array[3];
// var ind4 = array[4];
// var ind5 = array[5];

// array[0] = ind5;
// array[1] = ind4;
// array[2] = ind3;
// array[3] = ind2;
// array[4] = ind1;
// array[5] = ind0;

// console.log(array);

//_____________________________________________________


function reverseArr(arr){
    var newArr = [];
    arr.forEach(element => newArr.unshift(element));
    return newArr;
}
 
 console.log(reverseArr([1,2,3,4]))

//_________________________Полифил, метод реверс руками_______________________________________________________