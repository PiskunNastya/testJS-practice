alert('урок_5.js');

// var regexp = /[a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}/gi;
// var regexp = /([a-f\d]{2}[-:]){5}[a-f\d]{2}/gi;
// var regexp = /(?:[a-f\d]{2}[-:]){5}[a-f\d]{2}/gi;
// var regexp = /[a-f\d]{2}([-:])(?:[a-f\d]{2}[-:]){4}[a-f\d]{2}/gi;
// var regexp = /[a-f\d]{2}([-:])(?:[a-f\d]{2}\1){4}[a-f\d]{2}/gi;
// var regexp = /[a-f\d]{2}(?<separator>[-:])(?:[a-f\d]{2}\k<separator>){4}[a-f\d]{2}/gi;

// var str = `
//     ARP-таблица:
//     Физический адрес    IP-адрес
//     03-60-8C-01-02-03   197.17.13.3 3 
//     00:01:A2:05:09:89   197:17:12:44
//     AA-00-22-6A:92-89   197:17:12:123
//     08-AE-02-30-90-90   197:17:12:4
//     08:BC:AC:90:90:90   197:17:12:67
//     `;

// var result = Array.from(str.matchAll(regexp)); 
// console.log(result); 




// var regexp2 = /\s\d\s/;
// var result2 = str.match(regexp2);
// console.log(result2); 





// var regexp = /(\w+)\s(\w+)/;
// var regexp = /\w+\s\w+/;
// var regexp = /(\w+)\s(\w+)/;
// var str = 'Меня зовут Igor Sidorov. А тебя?';

// var result = str.match(regexp);
// console.log(result);



var regexp = /(?<first_name>\w+)\s(?<last_name>\w+)/;
var str = 'Меня зовут Igor Sidorov. А тебя?';

var result = str.replace(regexp, (match, p1, p2, offset, input, groups) => {
    console.log(match);     // совпадение
    console.log(p1);        // ссылка на скобочную группу, в даномм случае скобочных групп две
    console.log(p2);        // ссылка на скобочную группу, в даномм случае скобочных групп две
    console.log(offset);    // позиция на котором было найдено совпадение
    console.log(input);     // исходный текст
    console.log(groups);    // именованные скобочные группы
    return `${p2} ${p1}`;
});
console.log(result);

