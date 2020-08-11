window.addEventListener('load', pageLoadedHandler);

function pageLoadedHandler() {
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();                          // сохранити инфо об объекте в переменную
    var duck = document.querySelector('#duck');
    var counter = document.querySelector('#counter');
    var gameOver = document.querySelector('#game-over');
    var restart = document.querySelector('#restart');
    var delay = 2000;                                                               // setInterval


// _______________________РАНДОМНОЕ ДВИЖЕНИЕ УТКИ_________________________________________________________________________________

    function getRandCoords(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function moveDuck() {                                                           // setInterval
        duck.style.top = getRandCoords(1, containerRect.height) + 'px';
        // берет текущую инфо об длинне container и вычисляет рандомное число между
        // мин - 1 и  мах - максимальной длинной контейнера ---- ЭТО АРГУМЕНТЫ
        // функция возвращает одно рандомное число, к которому + 'px'


        duck.style.left = getRandCoords(1, containerRect.width) + 'px';
        // берет текущую инфо об ширине container и вычисляет рандомное число между
        // мин - 1 и  мах - максимальной шириной контейнера ---- ЭТО АРГУМЕНТЫ
        // функция возвращает одно рандомное число, к которому + 'px'
    }

    setInterval(moveDuck, delay);                                                   // setInterval

// ________________________________________________________________________________________________________

// ____________________________СЧЕТЧИК ПРИ ПОПАДАНИИ____________________________________________________________________________

container.addEventListener('click', shootTheDuck);

function shootTheDuck(event) {
    if(event.target.parentElement.id === 'duck') {                                                        // если у елем есть id 'duck'
        counter.innerHTML = parseInt(counter.innerHTML) + 1;                        // плюсуем +1 к счетчику попаданий
    } else if (event.target.id === 'restart') {
        gameOver.classList.remove('appear');
    } else {
        gameOver.classList.toggle('appear');
        counter.innerHTML = '0';
    }
}

// ________________________________________________________________________________________________________

// ______________________________РАБОТА С МОДАЛЬНЫМ ОКНОМ__________________________________________________________________________

// restart.addEventListener('click', restartGame);

// function restartGame() {
//     gameOver.classList.remove('appear');
// }


// ________________________________________________________________________________________________________

}

