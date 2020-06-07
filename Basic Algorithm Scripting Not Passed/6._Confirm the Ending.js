alert('6._Confirm the Ending');

// Скрипты основного алгоритма: подтверждение окончания
// Проверьте, strзаканчивается ли строка (первый аргумент ) заданной целевой строкой (второй аргумент, target).

// Эта проблема может быть решена с помощью .endsWith()метода, который был представлен в ES2015. 
// Но для этой задачи мы бы хотели, чтобы вы использовали вместо этого один из методов подстроки JavaScript.





//_______________________________________endsWith()__________________________________________________________________________


// function confirmEnding(str, target) {
//     return str.endsWith(target);
// }

// console.log(confirmEnding("Bastian", "n")); //  должен вернуть истину.
// console.log(confirmEnding("Congratulation", "on")); //  должен вернуть истину.
// console.log(confirmEnding("Connor", "n")); //  должен вернуть false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //  должен вернуть false.
// console.log(confirmEnding("He has to give me a new name", "name")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "same")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "pen")); //  должен вернуть false.
// console.log(confirmEnding("Open sesame", "game")); //  должен вернуть false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //  должен вернуть false.
// console.log(confirmEnding("Abstraction", "action")); //  должен вернуть истину.
// // Ваш код не должен использовать встроенный метод .endsWith()для решения проблемы.


//________________________________________endsWith()_________________________________________________________________________


//______________________________________slice()___________________________________________________________________________


// function confirmEnding(str, target) {

//     var accum = 0;

//     for(var i = 1; i <= target.length; i += 1) {
//         accum += 1;
//     }

//     var newStr = '-' + accum; // конкатенировала минус к числу
//     var num = parseInt(newStr, 10); // перевела ровное число, тип данных строка, в тип данных число

//     var x = str.slice(num);

//     return target === x ? true : false;

// }


// confirmEnding("Congratulation", "on");
// console.log(confirmEnding("Bastian", "n")); //  должен вернуть истину.
// console.log(confirmEnding("Congratulation", "on")); //  должен вернуть истину.
// console.log(confirmEnding("Connor", "n")); //  должен вернуть false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //  должен вернуть false.
// console.log(confirmEnding("He has to give me a new name", "name")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "same")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "pen")); //  должен вернуть false.
// console.log(confirmEnding("Open sesame", "game")); //  должен вернуть false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //  должен вернуть false.
// console.log(confirmEnding("Abstraction", "action")); //  должен вернуть истину.
// // Ваш код не должен использовать встроенный метод .endsWith()для решения проблемы.


//__________________________________________slice()_______________________________________________________________________



//___________________________________________substring()______________________________________________________________________


// function confirmEnding(str, target) {

//     // console.log(str.length);
//     // console.log(target.length);
//     // console.log(str.length - target.length);

//     var x = str.substring(str.length - target.length);
    
//     return x === target ? true : false;

// }


// // confirmEnding("Congratulation", "on");
// console.log(confirmEnding("Bastian", "n")); //  должен вернуть истину.
// console.log(confirmEnding("Congratulation", "on")); //  должен вернуть истину.
// console.log(confirmEnding("Connor", "n")); //  должен вернуть false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //  должен вернуть false.
// console.log(confirmEnding("He has to give me a new name", "name")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "same")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "pen")); //  должен вернуть false.
// console.log(confirmEnding("Open sesame", "game")); //  должен вернуть false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //  должен вернуть false.
// console.log(confirmEnding("Abstraction", "action")); //  должен вернуть истину.
// Ваш код не должен использовать встроенный метод .endsWith()для решения проблемы.


//__________________________________________substring()_______________________________________________________________________

//___________________________________________substr()______________________________________________________________________


// function confirmEnding(str, target) {

//     var x = str.substr(str.length - target.length);

//     return x === target ? true : false;

// }


// // confirmEnding("Congratulation", "on")
// console.log(confirmEnding("Bastian", "n")); //  должен вернуть истину.
// console.log(confirmEnding("Congratulation", "on")); //  должен вернуть истину.
// console.log(confirmEnding("Connor", "n")); //  должен вернуть false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); //  должен вернуть false.
// console.log(confirmEnding("He has to give me a new name", "name")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "same")); //  должен вернуть истину.
// console.log(confirmEnding("Open sesame", "pen")); //  должен вернуть false.
// console.log(confirmEnding("Open sesame", "game")); //  должен вернуть false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); //  должен вернуть false.
// console.log(confirmEnding("Abstraction", "action")); //  должен вернуть истину.
// // Ваш код не должен использовать встроенный метод .endsWith()для решения проблемы.


//__________________________________________substr()_______________________________________________________________________