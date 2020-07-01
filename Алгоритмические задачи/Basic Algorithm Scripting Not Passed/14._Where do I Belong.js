alert('14._Where do I Belong');

// Сценарии базового алгоритма: где я принадлежу
// Возвращает самый низкий индекс, по которому значение (второй аргумент) должно быть вставлено в массив (первый аргумент)
// после его сортировки. Возвращаемое значение должно быть числом.

// Например, getIndexToIns([1,2,3,4], 1.5)должен возвращать, 1потому что он больше 1(индекс 0), но меньше 2(индекс 1).

// Аналогично, getIndexToIns([20,3,5], 19)должен возвращаться, 2потому что после сортировки массива он будет выглядеть [3,5,20]
// и 19будет меньше 20(индекс 2) и больше 5(индекс 1).


//_________________________________________________________________________________________________________________________

// function getIndexToIns(arr, num) {

//     if(arr.length === 0) {
//         return 0;
//     }

//     arr.sort((a, b) => a - b);
 
//     for(var i = 0; i < arr.length; i += 1) {

//         if(num === arr[i]) {
//             return i;
//         } else if(num < arr[i]) {
//             return i;
//         }
     
//     }

//     return 3;
    
// }


// console.log(getIndexToIns([2, 20, 10], 19)); // должен вернуться 2.


// console.log(getIndexToIns([5, 3, 20, 3], 5)); // должен вернуться 2.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // должен вернуться 2.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // должен вернуться 3.


// console.log(getIndexToIns([3, 10, 5], 3)); // должен вернуться 0.
// console.log(getIndexToIns([2, 5, 10], 15)); // должен вернуться 3.


// console.log(getIndexToIns([20, 3, 5], 19)); // 2                                                ++++
// console.log(getIndexToIns([40, 60], 50)); // должен вернуться 1.    60 больше 50                  ++++
// console.log(getIndexToIns([], 1)); // должен вернуться 0.                                               +++


//_________________________________________________________________________________________________________________________





function getIndexToIns(arr, num) {
    
    var newArr = arr.sort((a, b) => { // сортирую массив по увеличению элементов
        return a - b;
    });

    var result = newArr.reduce((accum, elem) => { // проходимся циклом, по массиву с помощью метода
        
        if(elem < num) {    // если elem меньше num, добавляю в accum +1
            accum += 1;
        } 
            return accum;
    }, 0); // назначаю accum = 0


    return result;
  }
  
  console.log(getIndexToIns([40, 60], 50)); //;
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return a number.
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return 2.
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return a number.
  console.log(getIndexToIns([40, 60], 50)); // should return 1.
  console.log(getIndexToIns([40, 60], 50)); // should return a number.
  console.log(getIndexToIns([3, 10, 5], 3)); // should return 0.
  console.log(getIndexToIns([3, 10, 5], 3)); // should return a number.
  console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return 2.
  console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return a number.
  console.log(getIndexToIns([2, 20, 10], 19)); // should return 2.
  console.log(getIndexToIns([2, 20, 10], 19)); // should return a number.
  console.log(getIndexToIns([2, 5, 10], 15)); // should return 3.
  console.log(getIndexToIns([2, 5, 10], 15)); // should return a number.
  console.log(getIndexToIns([], 1)); // should return 0.
  console.log(getIndexToIns([], 1)); // should return a number.