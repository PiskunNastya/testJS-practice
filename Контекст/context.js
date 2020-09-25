// function fuck(text, text2) {
//     alert(this.name + text + text2);
// }

// var objOne = {
//     name: 'Nastya'
// }

// fuck.call(objOne, ' loves', ' cats!');



// var person = {
//     fullfunc: function(param){
//         return this.name + param;
//     }
// }

// var person2 = {
//     name: 'Nastya'
// }

// console.log(person.fullfunc.call(person2, 'ololo'))




// var person = {
//     fullfunc: function(param){
//         return this.name + param;
//     }
// }

// var person2 = {
//     name: 'Nastya'
// }

// console.log(person.fullfunc.call(person2, ['ololo', 'haha']))




this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
}


var ololo = module.getX;

var ha = ololo.bind(module);
console.log(ha());

