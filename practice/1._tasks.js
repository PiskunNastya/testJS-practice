alert('tasks');

//__________________________________декларативно___________________________________________________________

// 1. Дан массив [1, 2, [3, 4, [5, 6]]]; 
// Напишите функцию, которая будет рекурсивно выравнивать массив, где результатом будет [1, 2, 3, 4, 5, 6]. 
// Также найдите метод массива, который уже это делает и разберитесь самостоятельно как это работает.

function flat(arr) {
    return arr.reduce(function(acc, value) {
        // console.log(typeof acc);
        debugger;
        return acc.concat(Array.isArray(value) ? flat(value) : value); // возвращает acc = [1, 2], acc = [3, 4], acc = [5, 6]
    }, [])
}

console.log(flat([1, 2, [3, 4, [5, 6]]]));





//_____________________________________________________

// var arr = [1, 2, 3];

// var x = arr.concat(4);
// console.log(arr);
// console.log(x);

// var ololo = x.concat([12, 33])
// console.log(ololo);

//_____________________________________________________

// var arr = [1, 2, 3];

// arr.concat(4);
// console.log(arr);


// arr.concat([12, 33])
// console.log(arr);

//_____________________________________________________

// var p = arr.push(4);
// console.log(arr);
// console.log(p);

// var ololoo = arr.push([12, 33])
// console.log(ololoo);
// console.log(arr);

//_____________________________________________________


//__________________________________декларативно___________________________________________________________
