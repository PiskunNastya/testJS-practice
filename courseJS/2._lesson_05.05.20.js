alert('2._lesson_05.05.20.js');

// 1. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.


// ВОПРОС: не понимаю как правильно вписать в функцию return, что б не возвращало undefined.

// 1.1 вывод fizz вместо чисел, кратных 3;

    // function fizz(num) {

    //     var i;
    //     for(i = 1; i <= num; i += 1) {
    //         if(i !== 3 && i % 3 !== 0) {
    //             console.log(i);
    //         }

    //     }
    // }

    // console.log(fizz(9));
    // console.log(fizz(21));



// 1.2 вывод buzz вместо чисел, кратных 5;

    // function buzz(num) {

    //     var i = 1;
    //     while(i <= num) {
    //         if(i !== 5 && i % 5 !== 0) {
    //             console.log(i)
    //         }
    //         i += 1;
    //     }

    // }

    // console.log(buzz(25));
    // console.log(buzz(10));



    // 1.3 вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

    // function fizzbuzz(num) {

    //     var i;
    //     for(i = 0; i <= num; i += 1) {
    //         if(i !== 3 &&
    //            i !== 5 && 
    //            i % 3 !== 0 && 
    //            i % 5 !== 0) {
    //             console.log(i);
    //         }
    //     }
    // }

    // // console.log(fizzbuzz(20));
    // console.log(fizzbuzz(40));





// 2. Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.

    // var i = 45;
    // while(i <= 670) {
    //     if(i % 10 === 0) {
    //         console.log(i)
    //     }
    //     i += 1;
    // }



// 3. Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.

    // var i = 45;
    // while(i <= 67) {
    //     console.log(i);
    //     i += 1;
    // }


// 4. Напишите скрипт, который используя оператор for выполнит два предыдущих задания.

    // 4.1

    // var i;
    // for(i = 45; i <= 640; i += 1) {
    //     if(i % 10 === 0) {
    //         console.log(i)
    //     }
    // }


    // 4.2

    // var i;
    // for(i = 45; i <= 67; i += 1) {
    //     console.log(i);
    // }
    

// 5. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов. (используйте функции)


function func(n) {

    nextPrimef:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrimef; // не подходит, берём следующее
        }

        console.log(i);
        //debugger;
    }

}

console.log(func(7));
































// практика....неверно

// function simpleNumbers(num) {
//     // var x = 0;

//     // var i;
//     // for(i = 2; i <= num; i += 1) {
//     //     x++;

//     //     if(i === 2) {    
//     //         console.log(i);
//     //     } else if(i % x !== 0) {
//     //         console.log(i);
//     //     } 
//     // }


//     // for (let i = 2; i <= num; i++) {
//     //   for (let j = 2; j <= i; j++) {
//     //     if ((i % j == 0) && (j != i)) {
//     //       break;
//     //     } else {
//     //       console.log(i);
//     //       break;
//     //     }
//     //   }
//     // }


//     for (var i = 2; i <= 1000; i++) {
//         for (var j = 2; j < i; j++) {
//           if (i % j == 0) continue nextPrime;
//         }
//         list.push(i);
//       }


//     // var x;
//     // for(x = num; x >= 2; x -= 1) {

//     //     if(num % x !== 0) {    
//     //         console.log(x);

//     //     }

//     // }

// }

// // console.log(simpleNumbers(5));
// console.log(simpleNumbers(25));

// if(num % i !== 0) {    
//     console.log(i);
// }






// function isNatural(number) {
//     for (var i = 2; i <= number/2; i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isNatural(7));



// let n = 20;
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if ((i % j == 0) && (j != i)) {
//       break;
//     } else {
//       console.log(i);
//       break;
//     }
//   }
// }






// let n = 20;

// for (let i = 2; i <= n; i++) {
//     let flag = 1;
//     if (i > 2 && i % 2 != 0)
//     {
//         for (let j = 3; j*j <= i ; j=j+2)
//         {
//             if (i%j==0)
//             {
//                 flag=0;
//                 break;
//             }
//         }
//     }
//     else if (i != 2) flag = 0;
//     if (flag==1) {console.log(i);}
// }