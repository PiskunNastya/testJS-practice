alert('15._Mutations');

// Базовый алгоритм сценариев: мутации
// Вернуть true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

// Например, ["hello", "Hello"]должен возвращать true, потому что все буквы во второй строке присутствуют в первой, игнорируя регистр.

// Аргументы ["hello", "hey"]должны возвращать false, потому что строка «hello» не содержит «y».

// И, наконец, ["Alien", "line"]должен возвращать true, потому что все буквы в «строке» присутствуют в «Alien».



//_________________________________________________________________________________________________________

function mutation(arr) {


    var arr0_indexLowerCase = arr[0].toLowerCase(); // перевела первый элемент в малый регистр, так как метод includes чувствительный к регистру
    var arr1_indexLowerCase = arr[1].toLowerCase(); // перевела второй элемент в малый регистр, так как метод includes чувствительный к регистру
    var i;

    var accum = 0; // аккумулятор будет насчитывать колицество совпадений в буквах

    for(i = 0; i <= arr1_indexLowerCase.length - 1; i += 1) { // прошлась циклом по второму элементу, к первомую. Так как у второго элемента может быть только одна буква, а у первого целое предложение
        if(arr0_indexLowerCase.includes(arr1_indexLowerCase[i])) { // проверила методом includes, есть ли в первом элементе, та буква, которая находиться во втором элементе
            accum += 1; // если есть, аккумулятор + 1
        }
    }

    return accum === arr1_indexLowerCase.length ? true : false; // если цифра в аккумуляторе равно длине второго элемента - true

  }

console.log(mutation(["hello", "Hey"])); // должен вернуть false.
console.log(mutation(["hello", "Helo"])); // должен вернуть истину.       
console.log(mutation(["hello", "Hello"])); // должен вернуть истину.     
console.log(mutation(["hello", "Helllo"])); // должен вернуть истину.    
console.log(mutation(["hello", "Hellllo"])); // должен вернуть истину.    
console.log(mutation(["hello", "Helllllo"])); // должен вернуть истину.     
console.log(mutation(["hello", "Hellllllo"])); // должен вернуть истину.     


//_________________________________________________________________________________________________________

