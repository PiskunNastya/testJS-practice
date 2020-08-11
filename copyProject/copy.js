var allList = document.getElementsByTagName('li');
var parent_li = document.querySelector('[data-ul="ul"]');
var showPersonage = document.getElementById('showPersonage');
var backInfo = document.getElementById('backInfo');
var buttonForvard = document.getElementById('buttonForvard');
var buttonBack = document.getElementById('buttonBack');
var dinamic_API = 'http://swapi.dev/api/people/?page=1';
var buttonDown = document.getElementById('buttonDown');
console.log(buttonDown);


window.addEventListener('load', function () {
    // console.log(dinamic_API, 'buttonBack текущее API');

    fetch('http://swapi.dev/api/people/?page=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            loadingTheFirstTenPeople(data.results);
        });

    function loadingTheFirstTenPeople(dataResults) {
        for (let i = 0; i < dataResults.length; i++) {
            allList[i].innerHTML = dataResults[i].name;
        }
    }

});


parent_li.addEventListener('click', function (event) {
    var target = event.target.innerHTML;

    if (event.target.tagName !== 'LI') {
        return
    }

    fetch(dinamic_API)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayInfoTable(data.results);
        });

    function displayInfoTable(dataResults) {
        var name = document.getElementById('name');
        var birthday = document.getElementById('birthday');
        var gender = document.getElementById('gender');
        var films = document.getElementById('films');
        var planet = document.getElementById('planet');
        var subspecies = document.getElementById('subspecies');

        if (films.children.length > 0) {
            for (var i = films.children.length - 1; i >= 0; i--) {
                films.children[i].remove();
            }
        }

        if (subspecies.children.length > 0) {
            for (var i = subspecies.children.length - 1; i >= 0; i--) {
                subspecies.children[i].remove();
            }
        }


        for (let i = 0; i < dataResults.length; i++) {
            if (target === dataResults[i].name) {
                name.innerHTML = dataResults[i].name;
                birthday.innerText = dataResults[i].birth_year;
                gender.innerText = dataResults[i].gender;


                for (elem of dataResults[i].films) {
                    fetch(elem)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            var new_li = document.createElement('li');
                            new_li.innerText = data.title;
                            films.append(new_li);
                        });
                }

                fetch(dataResults[i].homeworld)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        planet.innerText = data.name;
                    });

                for (elem of dataResults[i].species) {
                    fetch(elem)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            var new_li = document.createElement('li');
                            new_li.innerText = data.name;
                            subspecies.append(new_li);
                        });
                }
            }
        }

    }

    showPersonage.style.display = 'block';
});


backInfo.addEventListener('click', function () {
    showPersonage.style.display = 'none';
});







buttonForvard.addEventListener('click', function () {

    var apiWithoutPageNumber = dinamic_API.slice(0, -1);
    var currentAPI = dinamic_API.substring(dinamic_API.length, dinamic_API.length - 1);

    currentAPI = parseInt(currentAPI, 10);
    currentAPI += 1;
    dinamic_API = apiWithoutPageNumber + currentAPI;

    buttonBack.style.display = 'block';

    fetch(dinamic_API)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(dinamic_API, 'buttonForvard текущее API');
            if (typeof data.next === 'string') {

                for (let i = 0; i < data.results.length; i++) {
                    allList[i].innerHTML = data.results[i].name;
                }

            } else if (typeof data.next === 'object') {
                buttonForvard.style.display = 'none';

                for (let i = 0; i < data.results.length; i++) {
                    allList[i].innerHTML = data.results[i].name;
                }

                for (var i = allList.length - 1; i >= data.results.length; i--) {
                    allList[i].remove();
                }

            }
        });
});



buttonBack.addEventListener('click', function () {
    var apiWithoutPageNumber = dinamic_API.slice(0, -1);
    var currentAPI = dinamic_API.substring(dinamic_API.length, dinamic_API.length - 1);

    currentAPI -= 1;
    dinamic_API = apiWithoutPageNumber + currentAPI;


    fetch(dinamic_API)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(dinamic_API, 'buttonBack текущее API');
            var currentCollection_li = document.getElementsByTagName('li');

            if (data.next === 'http://swapi.dev/api/people/?page=2') {
                fillingTheTable(data.results);
                buttonBack.style.display = 'none';
            } else if (data.next === 'http://swapi.dev/api/people/?page=9') {
                buttonForvard.style.display = 'block';
                for (let i = 1; i <= 8; i++) {
                    var li = document.createElement('li');
                    parent_li.append(li);
                }
                fillingTheTable(data.results);
            } else {
                fillingTheTable(data.results);
            }

            function fillingTheTable(dataResults) {
                currentCollection_li = document.getElementsByTagName('li');

                for (let i = 0; i < dataResults.length; i++) {
                    currentCollection_li[i].innerHTML = dataResults[i].name;
                }
            }

        });

});