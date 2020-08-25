let argMoveId, argPlayerMove, argComputerMove, argButtonName;

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () { buttonClicked('Kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('Papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('Nożyce'); });


/**
 * Przechwytywanie argumentu
 * @param {*} argButtonName 
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    const playerMove = argButtonName.toLowerCase();
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

/**
 * A tu komp losuje sobie numerek od 1 do 3 na podstawie którego będzie 
 * @param {*} argMoveId 
 */
function getMoveName(argMoveId) {
    console.log('A komp wybrał sobie argument nr: ' + argMoveId);

    switch (argMoveId) {
        case 1:
            return 'kamień';
        case 2:
            return 'papier';
        case 3:
            return 'nożyce';
        default:
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
    }
}

/**
 * Warunki wygranej
 * @param {*} argPlayerMove 
 * @param {*} argComputerMove 
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    printMessage('Komp zagrał: ' + argComputerMove + ', a gracz: ' + argPlayerMove);

    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove === argComputerMove) {
        printMessage('REMIS!');
    } else {
        printMessage('Przegrywasz :(');
    }
}


