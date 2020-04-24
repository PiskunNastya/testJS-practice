alert('tasks');

// 1) Выведите столбец чисел от 1 до 100.

// for(var i = 1; i <= 100; i += 1) {
//     console.log(i);
// }

// var i = 1;
// while(i <= 100) {
//     console.log(i);
//     i += 1;
// }

// var i = 1;
// do {
//     console.log(i);
//     i += 1;
// } while(i <= 100);



















// 2) Выведите столбец чисел от 11 до 33.


// for(var i = 11; i <= 33; i += 1) {
//     console.log(i)
// }


// var i = 11;
// while(i <= 33) {
//     console.log(i);
//     i += 1;
// }


// var i = 11;
// do {
//     console.log(i)
//     i += 1;
// } while(i <= 33);















// 3) Выведите столбец четных чисел в промежутке от 0 до 100.

// for(var i = 0; i <= 100; i += 1) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }



// var i = 0;
// while(i <= 100) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
//     i += 1;
// }




// var i = 0;
// do {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
//     i += 1;
// } while(i <= 100);










// 4) С помощью цикла найдите сумму чисел от 1 до 100.


// var sum = 0;

// for(var i = 1; i <= 100; i += 1) {
//     sum += i;
// }

// console.log(sum);


// var i = 1;
// var sum = 0;

// while(i <= 100) {
//     sum += i;
//     i += 1;
// }

// console.log(sum);


// var i = 1;
// var sum = 0;

// do {
//     sum += i;
//     i += 1;
// } while(i <= 100);

// console.log(sum);




/* 5) Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.*/

// var num = 0;

// for(var i = 1000; i >= 50; i -= 1) {  
//     num += 1;
//     i = i / 2;
//     console.log(i);
//     console.log(num);
// }

// var i = 1000;
// var num = 0;

// while(i >= 50) {
//     num += 1;
//     i /= 2;
//     i -= 1;
//     console.log(i);
//     console.log(num);
// }

// var i = 1000;
// var sum = 0;

// do {
//     sum += 1;
//     i /= 2;
//     i -= 1;
//     console.log(sum);
//     console.log(i);
// } while(i >= 50);




    





/*6) Given an array, rotate the array to the right by k steps, where k is non-negative.
    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

    function rotate(nums, k) {
        // write code here
}

rotate([1,2,3,4,5,6,7], 3);

Написать метод reverse своими силами и использовать для того, чтобы развернуть строку и массив*/

// function rotate(nums, k) {
//     for(var i = 0; i <= nums.length - 1; i += 1) {
//         // console.log(nums[i]);
//         var value = nums.pop();
//         console.log(value);
//     }
// }

// rotate([1,2,3,4,5,6,7], 3);


// ВОРОС





// 7) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// var arr = ['a', 'b', 'c'];

// arr.push(1, 2, 3);

// console.log(arr);





// 8) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// var arr = [1, 2, 3];

// arr.unshift(4, 5, 6);

// console.log(arr);








// 9) Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. (числа от 0 до 10)

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var sum = 0;
// var num = 0;
// for(var i = 0; i <= arr.length - 1; i += 1) {
//     sum = i * i;
//     console.log(sum);
//     num += sum;
//     console.log(num);
// }












// 10) Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// var arr = [];
// var max = 10;
// var min = 1;

// for(var i = 1; i <= 10; i += 1) {
//     var x = Math.floor(Math.random() * (max + 1));
//     arr.push(x);
//     console.log(arr);
// }



// 11) Заполните массив 10-ю случайными числами от 11 до 20 с помощью цикла.

var arr = [];
var max = 20;
var min = 11;

for(var i = 1; i <= 10; i += 1) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(x);
    arr.push(x);
    console.log(arr);
}