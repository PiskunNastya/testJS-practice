alert('1._Convert Celsius to FahrenheitPassed');

// Скрипты основного алгоритма: конвертировать градусы Цельсия в градусы Фаренгейта
// Алгоритм пересчета из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия 9/5плюс 32.

// Вам дана переменная, celsiusпредставляющая температуру в градусах Цельсия. 
// Используйте fahrenheitуже определенную переменную и присвойте ей температуру по Фаренгейту, 
// эквивалентную заданной температуре Цельсия. Используйте алгоритм, 
// упомянутый выше, чтобы помочь преобразовать температуру по Цельсию в градусы Фаренгейта.


function convertToF(celsius) {
    return celsius * (9 / 5) + 32;
}

console.log(convertToF(0)); // должен вернуть номер
console.log(convertToF(-30)); // должен вернуть значение -22
console.log(convertToF(-10)); // должен вернуть значение 14
console.log(convertToF(0)); // должен вернуть значение 32
console.log(convertToF(20)); // должен вернуть значение 68
console.log(convertToF(30)); // должен вернуть значение 86
