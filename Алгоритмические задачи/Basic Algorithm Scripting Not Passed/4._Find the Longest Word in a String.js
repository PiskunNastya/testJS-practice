alert('4._Find the Longest Word in a String');


// Сценарии базового алгоритма: найдите самое длинное слово в строке
// Верните длину самого длинного слова в предложенном предложении.

// Ваш ответ должен быть числом.


function findLongestWordLength(str) {

    var array = str.split(' ');

    var result = array.reduce(function(accum, elem) {
        
        if(accum < elem.length) {
            accum = elem.length;
        }

       return accum;

    }, 0);

    return result;

}
  

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //  должен вернуть номер.
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //  должен вернуться 6.
console.log(findLongestWordLength("May the force be with you")); //  должен вернуться 5.
console.log(findLongestWordLength("Google do a barrel roll")); //  должен вернуться 6.
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); //  должен вернуться 8.
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); //  должен вернуться 19.