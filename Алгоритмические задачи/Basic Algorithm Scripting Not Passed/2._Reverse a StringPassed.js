alert('2._Reverse a StringPassed');

// Скрипты основного алгоритма: перевернуть строку

// Переверните предоставленную строку.

// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его.

// Ваш результат должен быть строкой.




//______________________________________Declarative______________________________________________________

// метод split(), это метод строки, преобразование строки в массив
// метод reverse(), это метод массива, делает reverc
// метод join(), это метод массива, делает преобразование с массива в строку
 
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }



// console.log(reverseString("hello")); // должен вернуть строку.
// console.log(reverseString("hello")); // должен стать "olleh".
// console.log(reverseString("Howdy")); // должен стать "ydwoH".
// console.log(reverseString("Greetings from Earth")); // должен вернуться "htraE morf sgniteerG".

//______________________________________Declarative______________________________________________________


//______________________________________Imperative______________________________________________________

// метод split(), это метод строки, преобразование строки в массив
// метод reverse(), это метод массива, делает reverc
// метод join(), это метод массива, делает преобразование с массива в строку
 
function reverseString(str) {

    var arr = [];
    var newStr = '';
    var i;

    for(i = 0; i < str.length; i += 1) {
        arr.unshift(str[i]);
    }

    for(i = 0; i < arr.length; i += 1) {
        newStr += arr[i];
    }

    return newStr;
    
}


reverseString("hello");
console.log(reverseString("hello")); // должен вернуть строку.
console.log(reverseString("hello")); // должен стать "olleh".
console.log(reverseString("Howdy")); // должен стать "ydwoH".
console.log(reverseString("Greetings from Earth")); // должен вернуться "htraE morf sgniteerG".

//______________________________________Imperative______________________________________________________





