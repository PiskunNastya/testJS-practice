alert('hasOwnProperty');

var obj = {
    name: 'Nastya',
    age: 28
};

console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('cat'));
console.log(obj.hasOwnProperty(28));