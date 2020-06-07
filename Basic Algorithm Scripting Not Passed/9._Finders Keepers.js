alert('9._Finders Keepers');

// Скриптинг основного алгоритма: хранители искателей

// Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, 
// который проходит проверку на истинность (второй аргумент). Если ни один элемент не проходит тест, вернуть undefined.


//___________________________________________________________________________________________________________

// function findElement(arr, func) {

//     for(var i = 0; i < arr.length; i += 1) {
//         // console.log(arr[i]);

//         if(func(arr[i])) {
//             return arr[i];
//         }
//     }

// }


// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); //  должен вернуться 8.
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //  должен вернуть undefined.

//___________________________________________________________________________________________________________\


//________________________________________не верно___________________________________________________________________

// function findElement(arr, func) {

//     var num;

//     arr.forEach(function(elem) {
//         // console.log(elem);

//         if(func(elem)) {
//             num = elem;
//         }
//     });

//     return num;

// }


// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); 
// //  должен вернуться 8, а возвращает 10.
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //  должен вернуть undefined.

//___________________________________________________________________________________________________________



//___________________________________________________________________________________________________________

function findElement(arr, func) {
    return arr.find(func);
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); //  должен вернуться 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); //  должен вернуть undefined.

//___________________________________________________________________________________________________________