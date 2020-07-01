alert('#1 – Символьные классы, наборы и диапазоны символов');

//https://www.youtube.com/watch?v=pSdXUgOLpwo

//#1 – Символьные классы, наборы и диапазоны символов


// const regexp = new RegExp('шаблон', 'флаги');
// console.log(regexp);

// const regexp2 = /шаблон/флаги;
// console.log(regexp2);

//___________________________________________________________________________

// const regex1 = /\w+/;
// const regex2 = new RegExp('\\w+');

// // console.log(regex1);
// // // expected output: /\w+/

// console.log(regex2);
// // // expected output: /\w+/

// // console.log(regex1 === regex2);
// // expected output: false

//___________________________________________________________________________



var reg = new RegExp('Игорь');

var str = 'Игорь, бла бла бла, ололо!'

var result = str.match(reg);

console.log(result);






