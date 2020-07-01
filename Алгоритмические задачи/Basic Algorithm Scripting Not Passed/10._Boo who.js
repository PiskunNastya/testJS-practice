alert('10._Boo who');

// Скриптинг базового алгоритма: Boo who
// Проверьте, классифицировано ли значение как логический примитив. Верните true или false.

// Булевы примитивы истинны и ложны.



function booWho(bool) {
    return typeof bool === 'boolean' ? true : false;
}



console.log(booWho(true)); //  должен вернуть истину.
console.log(booWho(false)); //  должен вернуть истину.
console.log(booWho([1, 2, 3])); //  должен вернуть false.
console.log(booWho([].slice)); //  должен вернуть false.
console.log(booWho({ "a": 1 })); //  должен вернуть false.
console.log(booWho(1)); //  должен вернуть false.
console.log(booWho(NaN)); //  должен вернуть false.
console.log(booWho("a")); //  должен вернуть false.
console.log(booWho("true")); //  должен вернуть false.
console.log(booWho("false")); //  должен вернуть false.
