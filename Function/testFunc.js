alert('testFunc');

function age(birthYear) {
    return 2020 - birthYear;
}

function result(name, year) {

    var ageNow = age(year);

    console.log('Имя его ' + name + ' ему лет ' + ageNow);
}

result('Vladilen', 1993);
