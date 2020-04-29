alert('promt');

var x = prompt('число от 1 до 10', '10');
console.log(x);

var body = document.getElementById('practicPromt');

if(x <= 6) {
    document.body.style.background = "#AA0000";
}