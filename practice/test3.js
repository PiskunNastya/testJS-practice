// alert('start');

// var button = document.querySelector('button');


// button.addEventListener('click', function() {
//     // console.log('ololo');

//     function x() {
//         var a = 1;

//         return function() {
//             a++;
//             console.log(a);
//             return a;
//         }
//     }

//     var res = x();
//     res();
//     res();
// });



// _______________работает

// var a = 1;

// button.addEventListener('click', function() {
//     console.log(a++);
// })

// _______________работает

// function x() {
//     var a = 1;

//     return function () {
//         a++;
//         console.log(a);
//         return a;
//     }
// }

// var res = x();


// button.addEventListener('click', function () {
//     res();
// })


//______________________________________________________________________

var button = document.querySelector('button');
var all_li = document.getElementsByTagName('li');



button.addEventListener('click', function () {
    // for(elem of all_li) {
    //     // debugger;
    //     elem.remove();
    //     // console.log(all_li);
    // }

    // for(var i = 0; i < all_li.length - 1; i++) {
    //     // debugger;
    //     all_li[i].remove();
    // }

    console.log(all_li);
    console.log(all_li.length - 1);

    for(var i = all_li.length - 1; i >= 2; i--) {
        all_li[i].remove();
    }
    console.log(all_li);
    console.log(all_li.length - 1);
});

