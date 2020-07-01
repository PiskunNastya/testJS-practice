alert('test2.js');





//_______________________________________________

// var i;
// for(i = 0; i <= 100; i += 1) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

//_______________________________________________


// от 100 до 50, с шагом 3, четное

// var i;
// for(i = 100; i >= 50; i -= 3) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }









// var str1 = 'hello';
// var str2 = str1;

// str1 = str1 + ' 8';
// str2 = str2 + '  10';

// console.log(str1);
// console.log(str2);







// var arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// // var x = arr1.flat();
// arr1.flat(2);
// console.log(arr1);
// // console.log(x);

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// var r = arr4.flat(Infinity);


// console.log(r);
// r[r.length] = 1000;
// r.push(2000);


// console.log(r);
// console.log(arr1);



// var arr = [1, 2, 3, 4];
// delete arr[1];
// console.log(arr);
// var x = arr.flat();
// console.log(arr);
// console.log(x);





//______________________ФАКТОРИАЛ________________________________________________________________________


// function funk(num) {
//     if(num === 1) {
//         return 1;
//     } 

//     return num * funk(num - 1);
// }

// console.log(funk(5));

//_______________________________________________

// function funk(num) {
//     var accum = 1;

//     for(var i = 1; i <= num; i += 1) {
//         accum *= i;
//     }

//     return accum;
// }

// console.log(funk(5));


//______________________ФАКТОРИАЛ________________________________________________________________________


//______________________СРАВНИВАЕМ ОБЪЕКТЫ________________________________________________________________________

    // var obj1 = {
    //     a: 2,
    //     b: 3
    // }


    // var obj2 = {
    //     a: 4,
    //     b: 3
    // }

    // //_______________________________________

    // var obj3 = {
    //     a: 2,
    //     b: 3
    // }


    // var obj4 = {
    //     a: 2,
    //     b: 3
    // }

    //_______________________________________

    // function func(object1, object2) {

    //     var accom = 0;
    //     var accomObj = 0;

    //     for(key in object1) {
    //         accomObj += 1;
    //     }

    //     for(key in object1) {
    //         if(object1.hasOwnProperty(key)) {
            
    //             if(object1[key] === object2[key]) {
    //                 accom += 1;
    //             }

    //         }
    //     }

    //     return accom === accomObj ? true : false;
    // }

    // console.log(func(obj1, obj2));
    // console.log(func(obj3, obj4));

    //_______________________________________

      //_______________________________________

    // function func(a, b) {
    //     var aKeys = Object.keys(a);
    //     var bKeys = Object.keys(b);
    //     var i;

    //     if(aKeys.length !== bKeys.length) {
    //         return false;
    //     }

    //     for(i = 0; i < aKeys.length; i += 1) {

    //         if(a[aKeys[i]] !== b[bKeys[i]]) {
    //             return false;
    //         }

    //     }



    //     return true;

    // }

    // console.log(func(obj1, obj2));
    // console.log(func(obj3, obj4));

    //_______________________________________

    //_______________________________________

        // function func(a, b) {
        //     var aKeys = Object.keys(a);
        //     var bKeys = Object.keys(b);
        //     var i;
        //     var aSize = aKeys.length;
        //     var bSize = bKeys.length;
    
        //     if(aSize !== bSize) {
        //         return false;
        //     }
    
        //     for(i = 0; i < aSize; i += 1) {
        //         var propertyA = aKeys[i];
        //         var propertyB = bKeys[i];
    
        //         if(a[propertyA] !== b[propertyB]) {
        //             return false;
        //         }
    
        //     }
    
    
    
        //     return true;
    
        // }
    
        // console.log(func(obj1, obj2));
        // console.log(func(obj3, obj4));
    
    //_______________________________________


//______________________СРАВНИВАЕМ ОБЪЕКТЫ________________________________________________________________________

//______________________КОПИРОВАНИЕ ОБЪЕКТОВ________________________________________________________________________

    // var objectOne = {
    //     1: 'ololo',
    //     2: 20,
    //     3: true,
    //     4: null,
    //     5: undefined,
    //     6: {
    //         a: 40
    //     } 
    // }

    // var x = Object.assign({}, objectOne);

    // // console.log(objectOne);
    // // console.log(x);

    // objectOne.lo = 'ololo';
    // objectOne[7] = 'ololo___7';

    // x.do = 'xxxxx';

    // console.log(objectOne);
    // console.log(x);

    // //_________________________________________

    // var objectOne = {
    //     1: 'ololo',
    //     2: 20,
    //     3: true,
    //     4: null,
    //     5: undefined,
    //     6: {
    //         a: 40
    //     } 
    // }

    // var clone = {};

    // for(key in objectOne) {
    //     if(objectOne.hasOwnProperty(key)) {
    //         clone[key] = objectOne[key];
    //     }
    // }

    // console.log(objectOne);
    // console.log(clone);

//______________________КОПИРОВАНИЕ ОБЪЕКТОВ________________________________________________________________________

//__________________________________________________________________________________________________________________

// var objectOne = {
//     1: 'ololo',
//     2: 20,
//     3: true,
//     4: null,
//     5: undefined,
//     6: {
//         a: 40
//     } 
// }

// console.log(Object.entries(objectOne));

//__________________________________________________________________________________________________________________

// var arr = ['lora', 'polly', 'aria', 'brosh'];

// function letterA(arr) {

//     for(var i = 0; i < arr.length; i += 1) {
//         if(!arr[i].includes('a')) {
//             delete arr[i];
 
        
//        }
//     }


//     return arr.flat();
// }

// console.log(letterA(arr));


// var array = ['olol', 'slsl'];
// delete array[0];
// console.log(array);

//__________________________________________________________________________________________________________________

// var arr = ['lora', 'polly', 'aria', 'brosh'];

// function letterA(array) {
//     var i, j, r;
//     var newArr = [];


//     for(i = 0; i < arr.length; i += 1) {
//         // console.log(arr[i]);

//         for(j = 0; j < arr[i].length; j += 1) {

//             for(r = 0; r < newArr.length; r += 1) {

//                 if (newArr[r] === arr[i]) {
//                     delete newArr[r];
//                 }
                
//             }
                
//             if (arr[i][j] === 'a') {
//                 newArr.push(arr[i]);
//             }
               

            

//         }

//     }

//     return newArr.flat();

// }

// console.log(letterA(arr));

//__________________________________________________________________________________________________________________

// var arr = ['lora', 'polly', 'aria', 'brosh'];

// function letterA(array) {
//     var newArr = [];
//     var i, j;
//     var size = arr.length;

//     for(i = 0; i < size; i += 1) {

//         for(j = 0; j < arr[i].length; j += 1) {

//             if(arr[i][j] === 'a') {
//                 newArr.push(arr[i]);
//                 break;
//             }

//         }

//     }

//     return newArr;

// }

// console.log(letterA(arr));

//__________________________________________________________________________________________________________________


// var arr = ['lora', 'polly', 'aria', 'brosh'];

// function letterA(array) {

//     return result = array.filter(function(elem) {
//         if(elem.includes('a')) {
//             return elem
//         }
//     });
   
// }

// console.log(letterA(arr));




// console.log(document.body.nextSibling);

// var x1 = document.getElementById('opa');
// var x2 = document.querySelector('[data-set=setor]');
// console.log(x2.dataset);

//_______________________________________________________________________________________

// var div1 = document.createElement('div');
// var h1 = document.createElement('h1');
// h1.innerText = 'ololo';
// // console.log(h1);
// h1.setAttribute('id', 'textooooon');
// // console.log(div1);

// div1.append(h1);
// // console.log(div1);

// var test = document.getElementById('test');
// var test_2 = document.getElementById('test_2');
// // console.log(test_2);
// // test.append(div1);
// test.after(div1);
// console.log(test_2);


// console.log(document.body.div);

//_______________________________________________________________________________________


// var list_my = document.querySelector('ul');
// var i;

// for(i = 0; i <= 23; i += 1) {
//     var lem = document.createElement('li');
//     lem.setAttribute('data-itemITEMMMM', i);
//     lem.innerText = 'elem # ' + i;
//     list_my.append(lem);
// }


// function myEvent(event){
//     // console.log(event.target);
//     // console.log(this);
//     console.log(event.target.dataset);
// }



// list_my.addEventListener('click', myEvent);

//_______________________________________________________________________________________

// function isArr(elem) {
//     return Array.isArray(elem) ? true : false;
// }

// console.log(isArr([1, 2, 3]));
// console.log(isArr('OLOLO'));


//_______________________________________________________________________________________


var object = {
    a: 2,
    b: 6
}

// console.dir(object);
// console.log(object);


console.log(window.length);