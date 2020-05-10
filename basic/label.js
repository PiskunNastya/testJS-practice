alert('label.js');

// 1. Добавить к пустой строке 0234 

var str = '';

var i;
kkk:
for(i = 0; i <= 4; i += 1) {

    if(i === 1) continue kkk;

    str += i;
}

console.log(str);





// 2. добавить в arr [-3, -2, -1, 1, 2, 3], кроме 0;

var num = [-3, -2, -1, 0, 1, 2, 3];
var arr = [];

var i;
zero:
for(i = 0; i <= num.length - 1; i += 1) {
    if(num[i] === 0) continue zero;

    arr.push(num[i]);
}

console.log(arr);


// 3. вывести простые числа

function func(n) {

    nextPrimef:
    for (let i = 2; i <= n; i += 1) {

        for (var j = 2; j < i; j += 1) { 
            if (i % j === 0) continue nextPrimef; 
        }

        console.log(i);
        // debugger;
    }

}

console.log(func(7)); 