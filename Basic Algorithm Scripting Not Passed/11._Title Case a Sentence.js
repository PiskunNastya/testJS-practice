alert('11._Title Case a Sentence');

// Базовый алгоритм сценариев: заголовок дела приговора

// Вернуть предоставленную строку с первой буквой каждого слова с заглавной буквы. Убедитесь, что остальное слово в нижнем регистре.

// Для целей этого упражнения вы также должны использовать заглавные буквы, такие как «the» и «of».



//__________________________________________________________________________________________________________________

// function titleCase(str) {
//     var newStr = str.toLowerCase();

//     var arr = newStr.split(' ');

//     var result = '';


//     for(var i = 0; i < arr.length; i += 1) {

//         var firstLetter = arr[i][0].toUpperCase();
//         var wordWithout_FirstLetter = arr[i].substring(1, arr[i].length);
//         var word = firstLetter + wordWithout_FirstLetter;
//         result = result + word + ' ';

//     }

//     return result;
// }

// console.log(titleCase("I'm a little tea pot")); //  должен вернуть строку.
// console.log(titleCase("I'm a little tea pot")); // должен вернуться I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")); // должен вернуться Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // должен вернуться Here Is My Handle Here Is My Spout.

//__________________________________________________________________________________________________________________



//__________________________________________________________________________________________________________________

// function titleCase(str) {
//     var newStr = str.toLowerCase();

//     var arr = newStr.split(' ');

//     var result = '';

//     var x = arr.forEach(function(elem) {
//         var firstLetter = elem[0].toUpperCase();
//         var wordWithout_FirstLetter = elem.substring(1, elem.length);
//         var word = firstLetter + wordWithout_FirstLetter;
//         result = result + word + ' ';
//     });

//     return result;
// }

// console.log(titleCase("I'm a little tea pot")); //  должен вернуть строку.
// console.log(titleCase("I'm a little tea pot")); // должен вернуться I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")); // должен вернуться Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // должен вернуться Here Is My Handle Here Is My Spout.

//__________________________________________________________________________________________________________________



function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');

    var result = convertToArray.map(function(val) {
        return val.replace(val[0], val[0].toUpperCase());
    });

    return result.join(" ");
}
  
titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot")); //  должен вернуть строку.
// console.log(titleCase("I'm a little tea pot")); // должен вернуться I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")); // должен вернуться Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // должен вернуться Here Is My Handle Here Is My Spout.