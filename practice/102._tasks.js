alert('tasks 102');

// 1. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.

// var arr = [1, -2, 3, 0, 4, -5, 6, -11];








// 2. Дан массив с числами. Оставьте в нем только положительные числа. Затем высчитайте из них квадратное число. Результат вложить в новый массив newArr.

//________________________________________________________________________________


// function f(arr) {
//     var newArr = arr.filter((currentValue) => {
//         if(currentValue > 0) {
//             return currentValue + 2;
//         //    return currentValue ** 2;
//         //    return Math.pow(currentValue, currentValue);
//         }
//     });
//     return newArr;
// }

// console.log(f([1, -2, 3, 0, 4, -5, 6, -11])); // должно вернуть [1, 9, 16, 36]

//________________________________________________________________________________






// 2.2

// function f(arr) {
//     var newArr = [];

//     for(var i = 0; i <= arr.length - 1; i += 1) {
//         if(arr[i] > 0) {
//             newArr.push(arr[i] ** 2);
//         }
//     }

//     return newArr;
// }

// console.log(f([1, -2, 3, 0, 4, -5, 6, -11])); // вернуло [1, 9, 16, 36]






// 2.3

function f(arr) {
    var newArr = arr.filter((currentValue) => {
        return currentValue > 0;
    });

    var result = newArr.map(currentValue => currentValue ** 2);
    // var result = newArr.map(currentValue => Math.pow(currentValue, 2));    так тоже работает

    return result;
}

console.log(f([1, -2, 3, 0, 4, -5, 6, -11])); // вернуло [1, 9, 16, 36]



