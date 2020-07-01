alert('3._Factorialize a NumberPassed');

// Скриптинг базового алгоритма: факториализация числа
// Вернуть факториал предоставленного целого числа.

// Если целое число представлено буквой n, факториал является произведением всех натуральных чисел, меньших или равных n.

// Факториалы часто обозначаются стенограммой n!

// Например: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Только целые числа, большие или равные нулю, будут предоставлены функции.






//_____________________________________________Рекурсия___________________________________________

// function factorialize(num) {

//     if(num === 0) {
//         return 1;
//     } else {
//         debugger;
//         var result = num * factorialize(num - 1);
//     }


//     return result;
// }

// console.log(factorialize(5)); //  должен вернуть номер.
// console.log(factorialize(5)); //  должен вернуть 120.
// console.log(factorialize(10)); //  должен вернуть 3628800.
// console.log(factorialize(20)); //  должен вернуть 2432902008176640000.
// console.log(factorialize(0)); //  должен вернуть 1.

//_____________________________________________Рекурсия___________________________________________

function factorialize(num) {

    var result = 1;

    if(num === 0) {
        return result;
    } else {
        for(var i = 1; i <= num; i += 1) {
             result = result * i;
        }
    }
    return result;
}

console.log(factorialize(5)); //  должен вернуть номер.
// console.log(factorialize(5)); //  должен вернуть 120.
// console.log(factorialize(10)); //  должен вернуть 3628800.
// console.log(factorialize(20)); //  должен вернуть 2432902008176640000.
console.log(factorialize(0)); //  должен вернуть 1.

