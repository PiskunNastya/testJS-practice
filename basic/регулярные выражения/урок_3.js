alert('#3 – Флаги');

// const reg = /./;
// const str = 'a\nb';


// var result = str.match(reg);
// console.log(result);


// const reg = /./g;
// const str1 = 'ololo\nbob'
// var result = str1.match(reg);
// console.log(result);


// const regul = new RegExp('шаблон', 'флаги');

//_____________________________________________________________________________

// const reg = /кот/i;
// const str = 'Кот терракотового цвета кушает котлету.'

// const result = str.match(reg);
// console.log(result);

//_____________________________________________________________________________

// const reg = /кот/gi;
// // g это все совпадения
// const str = 'Кот терракотового цвета кушает котлету.'

// // const result = str.matchAll(reg);
// const result = Array.from(str.match(reg));
// const result2 = Array.from(str.matchAll(reg)); // предоставляет развернутую инфо
// console.log(result);
// console.log(result2);

//_____________________________________________________________________________

// const regexp = /кот/gi;
// const str = 'Кот терракотового цвета кушает котлету.';

// let result = [];
// var currentResult = null;

// // вызываеться метод у Регулярного выражения в нутырь которого передаеться строка regexp.exec(str)
// // и ЕСЛИ етот метод возвращаеться что то что не являеться ЛОЖЬЮ, тоесть все кроме null, то цикл выполняеться
// // причем в переменной currentResult получаем текущий результат


// while (currentResult = regexp.exec(str)) {
//     result = [...result, currentResult];
//     // и наполняем массив с результатами 
//     // ...result берем старые результаты
//     // и кладем новые currentResult


//     // result.push(currentResult);
// }

// console.log(result);

//____________________________


//____________________________


// const regexp = /кот/gi;
// const str = 'Кот терракотового цвета кушает котлету.';

// let result = regexp.exec(str);
// console.log(result, regexp.lastIndex);

// result = regexp.exec(str);
// console.log(result, regexp.lastIndex);

// result = regexp.exec(str);
// console.log(result, regexp.lastIndex);

// result = regexp.exec(str);
// console.log(result, regexp.lastIndex);


//_____________________________________________________________________

// const regexp = /кот/gi;
// const str = 'Кот терракотового цвета кушает котлету.';

// var result = Array.from(str.matchAll(regexp));
// console.log(result);

// //_____________________________________________________________________

// const regexp2 = /кот/gi;
// const str2 = 'Кот терракотового цвета кушает котлету.';

// var result2 = str2.match(regexp2);
// console.log(result2);

// //_____________________________________________________________________

// const regexp3 = /кот/;
// const str3 = 'Кот терракотового цвета кушает котлету.';

// var result3 = str3.match(regexp3);
// console.log(result3);

// var result3 = str3.match(regexp3);
// console.log(result3);




//_________________________________________________________________________

// const regexp4 = /кот/gi;
// const str4 = 'Кот терракотового цвета кушает котлету.';

// var result4 = Array.from(str4.matchAll(regexp4));
// console.log(result4);

// //_________________________________________________________________________

// const regexp5 = /кот/gi;
// const str5 = 'Кот терракотового цвета кушает котлету.';

// var result5 = [];
// var currentResult = null;

// while(currentResult = regexp5.exec(str5)) {
//     // result5.push(currentResult);
//     result5 = [...result5, currentResult];
// }

// console.log(result5);

//_________________________________________________________________________________________________________

// var str = '';

// for(var i = 1; i <= 10; i += 1) {
//     str += (i === 2 || i === 8) ? 'a' : 'b';
// }

// console.log(str);


// let str2 = '';

// for(let i = 0; i < 10000000; i += 1) {
//     str2 += (i === 1000 || i === 2000) ? 'b' : 'a';
// }


// var regexp = /b/g;
// var t0 = performance.now();
// var result1 = regexp.exec(str2);
// var result2 = regexp.exec(str2);
// var result3 = regexp.exec(str2);
// var t1 = performance.now();
// // console.log(t1 - t0);
// // console.log(result1);
// // console.log(result2);
// // console.log(result3);


// regexp = /b/y;
// t0 = performance.now();
// result1 = regexp.exec(str2);
// result2 = regexp.exec(str2);
// result3 = regexp.exec(str2);
// t1 = performance.now();
// // console.log(t1 - t0);
// // console.log(result1);
// // console.log(result2);
// // console.log(result3);



// regexp = /b/g;
// t0 = performance.now();
// regexp.lastIndex = 1000;
// result1 = regexp.exec(str2);
// regexp.lastIndex = 2000;
// result2 = regexp.exec(str2);
// result3 = regexp.exec(str2);
// t1 = performance.now();
// // console.log(t1 - t0);
// // console.log(result1);
// // console.log(result2);
// // console.log(result3);


// regexp = /b/y;
// t0 = performance.now();
// regexp.lastIndex = 1000;
// result1 = regexp.exec(str2);
// regexp.lastIndex = 2000;
// result2 = regexp.exec(str2);
// result3 = regexp.exec(str2);
// t1 = performance.now();
// console.log(t1 - t0);
// console.log(result1);
// console.log(result2);
// console.log(result3);

//__________________________________________________________________________________

console.log('😄'.length);
console.log('𝒳'.length);


