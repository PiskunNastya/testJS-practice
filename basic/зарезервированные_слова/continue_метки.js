alert('continue');

//__________________простые числа_______________________________________________________________

// function func(n) {

//     nextPrimef:
//     for(let i = 2; i <= n; i += 1) {

//         for(let j = 2; j < i; j += 1) {
//             if (i % j === 0) continue nextPrimef;
//         }

//         console.log(i);
//         // return i;
//     }

    

// }

// console.log(func(7));

//_________________________________________________________________________________

//_________________добавить к пустой строке 0234________________________________________________________________

var str = '';
var i;


Stop:
for(i = 0; i <= 4; i += 1) {
    if(i === 1) continue Stop; // когда доходим до 1, пропускаем 1 и идем по циклу дальше

    str += i;
}

console.log(str);

//_____________________________________________________________________

var str = '';
var i;



for(i = 0; i <= 4; i += 1) {
    if(i === 1) continue; // когда доходим до 1, пропускаем 1 и идем по циклу дальше

    str += i;
}

console.log(str);

//_____________________________________________________________________

var str = '';
var i;



for(i = 0; i <= 4; i += 1) {
    if(i === 1) {
        continue; // когда доходим до 1, пропускаем 1 и идем по циклу дальше
    } 
    str += i;
}

console.log(str);

//_________________________________________________________________________________