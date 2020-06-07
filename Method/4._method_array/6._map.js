alert('map');

// 1. умножить каждый элемент массива на 2

// 1.1.1 map под капотом, решение циклом for

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];

// for(var i = 0; i <= arr.length - 1; i += 1) {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
// }

// console.log(newArr);



// 1.1.2 map под капотом, решение циклом while

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];
// var i = 0;

// while(i <= arr.length - 1) {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
//     i += 1;
// }

// console.log(newArr);




// 1.1.3 map под капотом, решение циклом do...while

// var arr = [1, 2, 3, 4, 5];
// var newArr = [];
// var i = 0;

// do {
//     var sum = arr[i] * 2;
//     newArr.push(sum);
//     i += 1;
// } while(i <= arr.length - 1);

// console.log(newArr);




// 1.2.1 решение с помощью метода map

// var arr = [1, 2, 3, 4, 5];

// var newArr = arr.map(function(arr) {
//     return arr * 2;
// })

// console.log(newArr);





// 1.2.2 решение с помощью метода map

// var arr = [1, 2, 3, 4, 5];

// var newArr = arr.map((arr) => arr * 2);

// console.log(newArr);





// 2. создать массив содержащий квадратные корни чисел

// var arr = [0, 64, 121, 289];

// var newArr = arr.map(Math.sqrt);

// console.log(newArr);




// 3. использование map для переворачивания строки


// var str = '12345';
// var t = [].map.call(str, function(x) {
//     return x;
// }).reverse().join();

// console.log(str);
// console.log(t);





// 4. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// var arr = [2, 4, 6, 8];

// var dubl = arr.map(function(x) {
//     return x * x;
// });

// console.log(arr);
// console.log(dubl);




// 5. полифил

// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.19
// Ссылка (en): http://es5.github.com/#x15.4.4.19
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.19
// if (!Array.prototype.map) {

//     Array.prototype.map = function(callback, thisArg) {
  
//       var T, A, k;
  
//       if (this == null) {
//         throw new TypeError(' this is null or not defined');
//       }
  
//       // 1. Положим O равным результату вызова ToObject с передачей ему
//       //    значения |this| в качестве аргумента.
//       var O = Object(this);
  
//       // 2. Положим lenValue равным результату вызова внутреннего метода Get
//       //    объекта O с аргументом "length".
//       // 3. Положим len равным ToUint32(lenValue).
//       var len = O.length >>> 0;
  
//       // 4. Если вызов IsCallable(callback) равен false, выкидываем исключение TypeError.
//       // Смотрите (en): http://es5.github.com/#x9.11
//       // Смотрите (ru): http://es5.javascript.ru/x9.html#x9.11
//       if (typeof callback !== 'function') {
//         throw new TypeError(callback + ' is not a function');
//       }
  
//       // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
//       if (arguments.length > 1) {
//         T = thisArg;
//       }
  
//       // 6. Положим A равным новому масиву, как если бы он был создан выражением new Array(len),
//       //    где Array является стандартным встроенным конструктором с этим именем,
//       //    а len является значением len.
//       A = new Array(len);
  
//       // 7. Положим k равным 0
//       k = 0;
  
//       // 8. Пока k < len, будем повторять
//       while (k < len) {
  
//         var kValue, mappedValue;
  
//         // a. Положим Pk равным ToString(k).
//         //   Это неявное преобразование для левостороннего операнда в операторе in
//         // b. Положим kPresent равным результату вызова внутреннего метода HasProperty
//         //    объекта O с аргументом Pk.
//         //   Этот шаг может быть объединён с шагом c
//         // c. Если kPresent равен true, то
//         if (k in O) {
  
//           // i. Положим kValue равным результату вызова внутреннего метода Get
//           //    объекта O с аргументом Pk.
//           kValue = O[k];
  
//           // ii. Положим mappedValue равным результату вызова внутреннего метода Call
//           //     функции callback со значением T в качестве значения this и списком
//           //     аргументов, содержащим kValue, k и O.
//           mappedValue = callback.call(T, kValue, k, O);
  
//           // iii. Вызовем внутренний метод DefineOwnProperty объекта A с аргументами
//           // Pk, Описатель Свойства
//           // { Value: mappedValue,
//           //   Writable: true,
//           //   Enumerable: true,
//           //   Configurable: true }
//           // и false.
  
//           // В браузерах, поддерживающих Object.defineProperty, используем следующий код:
//           // Object.defineProperty(A, k, {
//           //   value: mappedValue,
//           //   writable: true,
//           //   enumerable: true,
//           //   configurable: true
//           // });
  
//           // Для лучшей поддержки браузерами, используем следующий код:
//           A[k] = mappedValue;
//         }
//         // d. Увеличим k на 1.
//         k++;
//       }
  
//       // 9. Вернём A.
//       return A;
//     };
//   }