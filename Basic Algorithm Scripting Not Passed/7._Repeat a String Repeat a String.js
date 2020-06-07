alert('7._Repeat a String Repeat a String');

// Скрипты базового алгоритма: повторение строки повторение строки

// Повторите данную строку str(первый аргумент) для numвремен (второй аргумент). 
// Вернуть пустую строку, если numне является положительным числом.


function repeatStringNumTimes(str, num) {
    var result = '';

    if(num <= 0) {
        return result;
    } else {
        for(var i = 1; i <= num; i += 1) {
            result += str;
        }
        return result;
    }

}


repeatStringNumTimes("*", 3);
console.log(repeatStringNumTimes("*", 3)); // должен вернуться "***".
console.log(repeatStringNumTimes("abc", 3)); // должен вернуться "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)); // )должен вернуться "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)); // должен вернуться "abc".
console.log(repeatStringNumTimes("*", 8)); // должен вернуться "********".
console.log(repeatStringNumTimes("abc", -2)); // должен вернуться "".
// Встроенный repeat()метод не должен использоваться.
console.log(repeatStringNumTimes("abc", 0)); // должен вернуться "".


