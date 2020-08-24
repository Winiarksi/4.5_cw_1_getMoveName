let argMoveId, argPlayerMove, argComputerMove, argButtonName;
// let buttonTest;
let buttonRock, buttonPaper, buttonScissors;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


// if (buttonTest && buttonRock && buttonPaper && buttonScissors) {

    // document.addEventListener('DOMContentLoaded', function () {
        // buttonTest.addEventListener('click', buttonClicked('Guzik TEST'), true);
    // });
    // buttonTest.addEventListener('click', function () { buttonClicked('Guzik TEST'); });
   
   
    buttonRock.addEventListener('click', function () { buttonClicked('Kamień'); });
    buttonPaper.addEventListener('click', function () { buttonClicked('Papier'); });
    buttonScissors.addEventListener('click', function () { buttonClicked('Nożyce'); });
// }


/**
 * Przechwytywanie argumentu
 * @param {*} argButtonName 
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    let playerMove = argButtonName.toLowerCase();
    console.log('ruch gracza to: ' + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
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
    //TOFIX - nie rozumiem czemu tu jest problem
    // else if (argPlayerMove === argComputerMoveł) {
    //     printMessage('REMIS!');
    // }
    else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Komp zagrał: ' + argComputerMove + ', a gracz: ' + argPlayerMove);
}


