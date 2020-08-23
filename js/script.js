var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function () { buttonClicked('Guzik TEST'); });

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('Kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('Papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('Nożyce'); });


/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    // playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    // playerMove = getMoveName(playerInput);
    playerMove = argButtonName.toLowerCase();
    console.log('wybór ruchu gracza to: ' + playerInput);
    // playerMove = 'argButtonName';
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

/**
 * A tu komp losuje sobie numerek od 1 do 3 na podstawie którego będzie 
 * @param {*} argMoveId 
 */
function getMoveName(argMoveId) {
    console.log('A komp wybrał sobie argument nr: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
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
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    }
     else if ( argPlayerMove ===  argComputerMoveł) {
        printMessage('REMIS!');
    }
     else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Komp zagrał: ' + argComputerMove + ', a gracz: ' + argPlayerMove);
}






