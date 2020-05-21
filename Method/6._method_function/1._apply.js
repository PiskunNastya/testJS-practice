alert('apply');

// 1___________________________________________________________________________________________

// var person = {
//     name: 'Vladilen',
//     age: 30,
//     f: function(job, tell) {
//         console.group(`About ${this.name}`);
//         console.log(`Name ${this.name}`);
//         console.log(`Age ${this.age}`);
//         console.log(`Job ${job}`);
//         console.log(`Tell ${tell}`);
//         console.groupEnd();
//     }
// };

// // console.log(person.f);

// var person2 = {
//     name: 'Elena',
//     age: 30
// };

// // console.log(person.f.apply(person2, ['frontend', '45-45']));

// var x = person.f.apply(person2, ['fffkkk', 'kkkk']);
// console.log(x);



// 2___________________________________________________________________________________________

var obj = {
    firstname: 'Nastya',
    lastname: 'Kurachkina'
};

var valueFunk = {
    func: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(valueFunk.func.apply(obj));