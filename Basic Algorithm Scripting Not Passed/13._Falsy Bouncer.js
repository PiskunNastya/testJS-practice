alert('13._Falsy Bouncer');

// Скриптинг основного алгоритма: Falsy Bouncer
// Удалите все ложные значения из массива.

// Falsy значения в JavaScript являются false, null, 0, "", undefined, и NaN.

// Подсказка: попробуйте преобразовать каждое значение в логическое значение.


//____________________________________________________________________________________________________

// function bouncer(arr) {
//     return arr.filter(Boolean);
// }

// console.log(bouncer([7, "ate", "", false, 9])); // должен вернуться [7, "ate", 9].
// console.log(bouncer(["a", "b", "c"])); // должен вернуться ["a", "b", "c"].
// console.log(bouncer([false, null, 0, NaN, undefined, ""])); // должен вернуться [].
// console.log(bouncer([null, NaN, 1, 2, undefined])); // должен вернуться [1, 2].

//____________________________________________________________________________________________________





//____________________________________________________________________________________________________

function bouncer(arr) {
    return arr.filter(x => !!x);
}

function bouncer(arr) {
    return arr.filter((x) => !!x);
}


function bouncer(arr) {
    return arr.filter(function(x) {
        return !!x;
    });
}



console.log(bouncer([7, "ate", "", false, 9])); // должен вернуться [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // должен вернуться ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // должен вернуться [].
console.log(bouncer([null, NaN, 1, 2, undefined])); // должен вернуться [1, 2].

//____________________________________________________________________________________________________