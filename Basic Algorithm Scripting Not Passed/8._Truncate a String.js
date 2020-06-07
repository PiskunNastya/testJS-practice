alert('8._Truncate a String');

// Скрипты основного алгоритма: усечение строки

// Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). 
// Вернуть усеченную строку с ...окончанием.

//_______________________________________________________________________________________________________________

function truncateString(str, num) {

    if(num >= str.length) {
        return str.slice(0, num);
    } else {
        return str.slice(0, num) + '...';
    }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //  должен вернуть "A-tisket ...".
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); //  должен вернуть "Питер Пайпер ...".

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 
//  должен вернуть "A-tisket a-tasket Зеленая и желтая корзина".

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); 
//  должен вернуть "A-tisket a-tasket Зеленая и желтая корзина".

console.log(truncateString("A-", 1)); //  должен вернуть "A ...".
console.log(truncateString("Absolutely Longer", 2)); //  должен вернуть "Ab ...".

//_______________________________________________________________________________________________________________



//_______________________________________________________________________________________________________________

// function truncateString(str, num) {
//     var newArr = str.split(' - '); // преобразовала строку в массив
//     var i, j;
//     var len_i = newArr.length - 1; // сохранила длинну в переменную
//     newStr = '';

//     for(i = 0; i <= len_i; i += 1) { // проходимся по массиву, и выясняем что в нем только один элемент, по индексу 0
//         var len_j = newArr[i].length - 1; // сохранила длинну в переменную
        
//         for(j = 0; j <= len_j; j += 1) { // проходимся по эдинственному элементу массива, строке
//             // так как тут мы проходимся по типу данных string, цикл начинаеться с 0, 
//             // если поставим с 1 (как длинна), то первый элемент newArr[0][0] - в консоле будет пропускаться
//             // console.log(typeof newArr[i][j]); // тип данных string
            
//             if (str.length === num || str.length < num) { // если длинна строки равна или меньше num, выводим параметр str
//                 return str;
//             } else if(j === num - 1) { 
//                 // так как когда мы по циклу проходимся по строке, первый индекс строки 0, а входящий параметр num начинаеться с 1, поэтому от num отняла 1
//                 // если индекс строки 8, и (num - 1) равно 8, то добавляем последенее значение и '...' в переменную newStr
//                 return newStr = newStr + newArr[i][j] + '...'; //
//             } else {
//                 newStr += newArr[i][j]; // если все предыдущие условия не подходят, то добавляем текущее значение в переменную
//             }

//         }
//     }
//   }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //  должен вернуть "A-tisket ...".
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); //  должен вернуть "Питер Пайпер ...".

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 
// //  должен вернуть "A-tisket a-tasket Зеленая и желтая корзина".

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); 
// //  должен вернуть "A-tisket a-tasket Зеленая и желтая корзина".

// console.log(truncateString("A-", 1)); //  должен вернуть "A ...".
// console.log(truncateString("Absolutely Longer", 2)); //  должен вернуть "Ab ...".

//_______________________________________________________________________________________________________________