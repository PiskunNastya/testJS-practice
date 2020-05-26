alert('test');


// var arr = [1, 2];
// console.log(typeof arr);


// var arr = [1, 2, 3];
// // var arr = new Array(1, 2, 3);
// // console.log(arr);

// arr[0] = 'car';
// console.log(arr);










// var a_1_str2 = 'ololo';
// var a_2_num = 42;
// var a_3_bul = true;
// var a_4_x = null;
// var a_5_not;

// var a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// var a_7;
// var a_8_str = 'hello';



// let a_1_str2 = 'ololo';
// let a_2_num = 42;
// let a_3_bul = true;
// let a_4_x = null;
// let a_5_not;

// let a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// let a_7;
// let a_8_str = 'hello';



// const a_1_str2 = 'ololo';
// const a_2_num = 42;
// const a_3_bul = true;
// const a_4_x = null;
// // const a_5_not;

// const a_6_obj = {
//     name: 'Ned =)',
//     isHomer: false
// }



// console.log(window);

// // const a_7;
// const a_8_str = 'hello';





// ---1---_____________________________________копирование по значению_____________________________
// str1 = true;
// str2 = str1;
// str1 = false;

// console.log(str1, str2);
// ________________________________________________________________________________________________




// ---2---_____________________________________копирование объекта____________________________

// var obj = {
//     name: 'Ned =)',
//     isHomer: false
// }

// var newObj = {};

// for(keys in obj) {
//     if(obj.hasOwnProperty(keys)) {
//         newObj[keys] = obj[keys];
//     }
// }

// newObj.whatHeWant = 'car';

// console.log(newObj);
// console.log(obj);

// ________________________________________________________________________________________________


// ---3---_____________________________________CRUD array__________________________________________

// var arr = [1, 2, 3, 'hello', true, null, function() {}];

// console.log(arr[3]);

// arr[1] = 20;

// console.log(arr);


// ________________________________________________________________________________________________






// ---4---_____________________________________5 элемент в квадрат_________________________________

// var arr = [1, 2, 3, 4, 5];
// var i;
// var len = arr.length - 1;

// for(i = 0; i <= len; i += 1) {

//     if(i === 2) {
//         arr[i] = arr[i] ** 2;
//     }

// }

// console.log(arr);

// ________________________________________________________________________________________________



// ---5.1---_____________________________________среднее значение ___________________________________

// var arr = [25, 60, 5];

// var sum = arr.reduce((accumulator, currentvalue) => accumulator += currentvalue);

// var result = sum / arr.length


// console.log(result);


// ________________________________________________________________________________________________


// ---5.2---_____________________________________среднее значение___________________________________

// var arr = [25, 60, 5];

// var i;
// var len = arr.length - 1;
// var accumulator = 0;

// for(i = 0; i <= len; i += 1) {
//     accumulator += arr[i];
// }

// var result = accumulator / arr.length

// console.log(result);


// ________________________________________________________________________________________________


// if(typeof arr === 'object')






// var elt = document.getElementById("elementIdHere");
// var out = "";
// var st = elt.style;
// var cs = window.getComputedStyle(elt, null);
// for (x in st) {
//   out += "  " + x + " = '" + st[x] + "' > '" + cs[x] + "'\n";
// }

// console.log(out);

// ________________________________________________________________________________________________


// var form = document.querySelector('form'); // вытягиваем переменную в отдельную переменную
// console.log(form); // проверяем есть ли в переменной кнопка

// function whatFormDoes(event) { // вся бизнес логика функции будет работать только после нажатия на кнопку 
//     event.preventDefault();
//     console.log('ololo');
// }

// form.addEventListener('submit', whatFormDoes, false); // устанавливаем прослушку события на кнопку. 
// // В параметрах - 1. какое событие будет, 2. ссылка на функцию с бизнес логикой

// ________________________________________________________________________________________________


var loginForm = document.getElementById('form');  // добираемся до самой формы
var emailInput = document.querySelector('[type=text]'); // добираемся до инпута с атрибутом type=text ЕМЕЙЛ
var passwordInput = document.querySelector('[type=password]'); // добираемся до инпута с атрибутом type=password ПАРОЛЬ
var validationForEmail = document.getElementById('validateEmail'); // добираемся до места где будет отображаться инфо про ВАЛИДАЦИЮ ЕМЕЙЛ
var validationForPassword = document.getElementById('validatePassword'); // добираемся до места где будет отображаться инфо про ВАЛИДАЦИЮ ПАРОЛЯ
var submitButton = loginForm.querySelector('[type=submit]'); // переменная loginForm, есть родителем баттон у которого есть type=submit
var startInputDataEmail = false;
var startInputDataPassword = false;

validationForEmail.style.color = "red";
validationForPassword.style.color = "red";

submitButton.disabled = true; // делаем кнопку не активной

var GodObj = {
    // динамически записываю изменения startInputDataEmail
}



function emailInputHandler(event) {// каждый раз, когда будут вноситься изменения в инпут, будет выводиться в консоль бизнес логика функции
    // console.log(event.target.value);
    
    // if(!event.target.value.includes('@')) { // если строка не содержит указанную подстроку, а именно знак @
    //     validationForEmail.innerText = 'Email should contain @ symbol';
    //     startInputDataEmail = false;
    //     delete GodObj.startEmail;
    // } else {
    //     validationForEmail.innerText = 'ok';  
    //     startInputDataEmail = true;        
    // }

    if(!event.target.value.includes('@')) { // если строка не содержит указанную подстроку, а именно знак @
        validationForEmail.innerText = 'Email should contain @ symbol';
        startInputDataEmail = false;
        delete GodObj.startEmail;
    } else {
        validationForEmail.innerText = 'ok';  
        startInputDataEmail = true;        
    }

    if (event.target.value.length === 0) {
        validationForEmail.innerText = 'Please enter your email';
        startInputDataEmail = false;
        delete GodObj.startEmail;
    } 

    
    // console.log(event.target.value.length);
    // console.log(validationForEmail.innerText);
    // return startInputDataEmail;
    GodObj.startEmail = startInputDataEmail; // динамически записываю изменения в GodObj
    console.log(GodObj);

    if(GodObj.startEmail === true && GodObj.startPassword === true) {
        submitButton.disabled = false;
        console.log('yes');
    } else if (!GodObj.startEmail === true || GodObj.startPassword === true) {
        submitButton.disabled = true;
        console.log('noow');
    } else if (GodObj.startEmail === true || !GodObj.startPassword === true) {
        submitButton.disabled = true;
        console.log('noow');
    }




}



function passwordInputHandler(event) {


    if(event.target.value.length > 6) { // если пароль будет больше 6, сработает валидация
        validationForPassword.innerText = 'Maximum length of password should be 6 symbols';
        startInputDataPassword = false; 
        delete GodObj.startPassword;
    } else if (event.target.value.length === 0) {
        validationForPassword.innerText = 'Please enter password';
        startInputDataPassword = false; 
        delete GodObj.startPassword;
    } else {
        validationForPassword.innerText = 'ook';
        startInputDataPassword = true;
    }



    GodObj.startPassword = startInputDataPassword;
    console.log(GodObj);

//--------------------------------------------------------------------------------

    // if(GodObj.startEmail === true && GodObj.startPassword === true) {
    //     submitButton.disabled = false;
    //     console.log('yes');
    // } else if (!GodObj.startEmail === true || GodObj.startPassword === true) {
    //     submitButton.disabled = true;
    //     console.log('noow')
    // } else if (GodObj.startEmail === true || !GodObj.startPassword === true) {
    //     submitButton.disabled = true;
    //     console.log('noow')
    // } else if (!GodObj.startEmail === true || !GodObj.startPassword === true) {
    //     submitButton.disabled = true;
    //     console.log('noow')
    // }

//--------------------------------------------------------------------------------
    if(GodObj.startEmail === true && GodObj.startPassword === true) {
        submitButton.disabled = false;
        console.log('yes');
    } else if (!GodObj.startEmail === true || !GodObj.startPassword === true) {
        submitButton.disabled = true;
        console.log('noow')
    }

}



function sendData(event) { 
    event.preventDefault();
    console.log('ololo');
}


loginForm.addEventListener('submit', sendData); 
emailInput.addEventListener('input', emailInputHandler);
passwordInput.addEventListener('input', passwordInputHandler);



// ________________________________________________________________________________________________

// function aFunk(a) {
//     return a;
// }

// function bFunk(b) {
//     return b;
// }

// function cFunk(a, b) {
//     return a + b;
// }

// // console.log(aFunk(3));
// // console.log(bFunk(4));
// // console.log(cFunk(aFunk(), bFunk()));


// //___________________________________


// function aFunk() {
//     return 3;
// }

// function bFunk() {
//     return 4;
// }

// function cFunk(a, b) {
//     return a + b;
// }

// // // console.log(aFunk(3));
// // // console.log(bFunk(4));
// console.log(cFunk(aFunk(), bFunk()));

// //___________________________________


// function one() {
//     var kek = 12;
//     return kek;
// }
 
 


// function second() {
//     var lol = one();
//     console.log(lol);
// }

// second();

// //___________________________________

// var GodObj = {
//     ololo: 12,
//     llll: 30
// }

// if(GodObj.hasOwnProperty('ololo')) {
//     console.log('ooooooddddddddd');
// }

// console.log(GodObj.hasOwnProperty(12) ? true : false);
// console.log(GodObj.hasOwnProperty('ololo') ? true : false);
// console.log(GodObj);

// //___________________________________





// if((GodObj.hasOwnProperty('startPassword') && GodObj.hasOwnProperty('startEmail'))) {
//     console.log('yes');
// } else {
//     console.log('noow')
// }

// console.log(GodObj.hasOwnProperty('startEmail') && GodObj.hasOwnProperty('startPassword') ? true : false);
// console.log(GodObj.hasOwnProperty('startPassword') && GodObj.hasOwnProperty('startEmail') ? true : false);
























// var str = '';
// console.log(str.length);

// if(!str.length) {
//     console.log('000')
// }






// console.log(event.target.value);

// submitButton.disabled = true;

// if(validationForEmail.length > 0 && validationForPassword.length > 0) {
//     submitButton.disabled = true;
// } else {
//     submitButton.disabled = false;
// }



// if(!validationForEmail.length && !validationForPassword.length && startInputDataEmail && startInputDataPassword) {
//     submitButton.disabled = true;
// } else {
//     submitButton.disabled = false;
// }

// if(!validationForEmail.length && !validationForPassword.length || startInputDataEmail && startInputDataPassword) {
//     submitButton.disabled = false; 
// } 

// if(validationForEmail === 'ok') {
//     submitButton.disabled = false; 
// } else {
//     submitButton.disabled = true;
// }

// fffff@ukr.net

// function activationButton(startInputDataEmail_param, startInputDataPassword_param) {
//     if(startInputDataEmail_param) {
//         submitButton.disabled = false; 
//     }
// }

// submitButton.disabled = true;



    // if(startInputDataEmail) {
    //     submitButton.disabled = false; 
    // } else {
    //     submitButton.disabled = true;
    // }










    // function x(j) {
    //     return j;
    // }
    
    // console.log(x(emailInputHandler()));
    
    
    // function emailInputHandler(event) {// каждый раз, когда будут вноситься изменения в инпут, будет выводиться в консоль бизнес логика функции
    //     // if(!event.target.value.includes('@')) { // если строка не содержит указанную подстроку, а именно знак @
    //     //     validationForEmail.innerText = 'Email should contain @ symbol';
    //     //     return startInputDataEmail = false;
    //     // } else {
    //     //     validationForEmail.innerText = 'ok';  
    //     //     return startInputDataEmail = true;        
    //     // }
    
    //     var sum = 10;
    //     return sum;
    
    // }
