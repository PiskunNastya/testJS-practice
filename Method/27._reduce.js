alert('reduce');

// 1. Дан массив с числами. Найдите сумму этих чисел.

// 1.1

    // var arr = [1, 2, 3, 4];
    // var accumulator = 0;

    // for(var i = 0; i <= arr.length - 1; i += 1) {
    //     accumulator += arr[i];
    // }

    // console.log(accumulator);


// 1.2

    // var arr = [1, 2, 3, 4];

    // var sum = arr.reduce((accumulator, currentValue) => accumulator += currentValue);

    // console.log(sum);


// 1.3

    // var arr = [1, 2, 3, 4];

    // var sum = arr.reduce(function(accumulator, currentValue) {
    //     return accumulator += currentValue;
    // });

    // console.log(sum);










// 2. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// 1.3

    // function funk(arr) {

    //     var suma = 0;

    //     var returnValue = arr.reduce(function(accumulator, currentValue) {
    //         if (currentValue == 0) {
    //             suma = accumulator;
    //         } else {
    //             return accumulator + currentValue;
    //         }
    //     });

    //     return suma;

    // };

    // console.log(funk([1, 2, 3, 0, 4, 5, 6]));





// 1.2

    // var arr = [1, 2, 3, 0, 4, 5, 6];

    // var answer = 0;

    // var result = arr.reduce(function(sum, elem) {
    //     if(elem === 0) {
    //         answer = sum;
    //     } else {
    //         return sum + elem;
    //     }
    // });

    // // console.log(answer); // 6
    // console.log(result); // NaN





    // var arr = [1, 2, 3, 0, 4, 5, 6];

    // var answer = 0;

    // var result = arr.reduce(function(sum, elem) {
    //     if(elem === 0) {
    //         return answer = sum;
    //     } else {
    //         return sum + elem;
    //     }
    // });

    // // console.log(answer); // 6
    // console.log(result); // 21




// 3. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. 
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

// function funk(arr) {

//     var answer = 0;

//     var rev = arr.reverse();

//     var result = rev.reduce(function(accumulator, currentValue) {
//         if(currentValue === 0) {
//             answer = accumulator;
//         } else {
//             return accumulator + currentValue;
//         }
//     });

//     return answer;
// }

// console.log(funk([1, 2, 3, 0, 4, 5, 6]));







// 4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.



// function fank(arr) {

//     var result = arr.reduce(function(accumulator, currentValue) {
//         if(accumulator > 10) {
//             return accumulator;
//         } else {
//             return accumulator + currentValue;
//         }
//     });

//     return result;

// }

// console.log(fank([1, 2, 5, 1, 4, 5, 3]));










// 5. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.

function funk(arr) {

}

console.log(fank([1, 2, 5, 1, 4, 5, 3]));