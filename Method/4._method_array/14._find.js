alert('14._find');

var arr = ['ololo', 20, 'foo', 33, 'soryan', 60];

var x = arr.find(function(elem) {
    if(elem === 20) {
        return elem;
    }
});

console.log(arr);
console.log(x);