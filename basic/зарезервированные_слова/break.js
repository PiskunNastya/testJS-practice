alert('break');

function testBreak(x) {
    var i = 0;
 
    while (i < 6) {
       if (i == 3) { 
          break;        // когда доходим до 3, цикл останавливаеться
       }
       i += 1;
    }
    return i * x;
}

console.log(testBreak(2)); // 6
console.log(testBreak(3)); // 9