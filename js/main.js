'use strict'

let randNum = Math.floor(Math.random() * 100);

let entryField = document.querySelector('.main-field_entryField');
let entry = document.querySelector('.main-field_entryBtn');

let afterMain = document.querySelector('.main');
let resultDiv = document.createElement('div');
resultDiv.classList.add('main-result-wrapper');

let howMuchTries = document.createElement('p');
let userResult = document.createElement('p');
let mistakes = document.createElement('p');
let lowOrHi = document.createElement('p');

let tries = 1;
let howManyTries = 10;
let resetButton;

afterMain.appendChild(resultDiv);
resultDiv.appendChild(howMuchTries);

howMuchTries.textContent = 'У Вас осталось 10 попыток';

function guessTheNumber() {
    
    let userNum = Number(entryField.value);

    afterMain.appendChild(resultDiv);

    resultDiv.appendChild(howMuchTries);
    resultDiv.appendChild(userResult);
    resultDiv.appendChild(mistakes);
    resultDiv.appendChild(lowOrHi);

    --howManyTries;

    if (howManyTries < 5 && howManyTries > 1) {
        howMuchTries.textContent = `У Вас осталось: ${howManyTries} попытки`;
    } else if (howManyTries === 1) {
        howMuchTries.textContent = `У Вас осталось: ${howManyTries} попытка`;
    } else {
        howMuchTries.textContent = `У Вас осталось: ${howManyTries} попыток`;
    }

    if (tries === 1) {
        userResult.textContent = 'Ваши попытки: '
    }

    userResult.textContent += userNum + ' ';

    if (randNum === userNum) {
        gameOver();
        
    } else if (tries === 10) {
        gameOver();
        
    } else {
        mistakes.textContent = 'Ошибка!';
        mistakes.style.background = 'red';
        if (randNum > userNum) {
            lowOrHi.textContent = 'Ваше число меньше загаданного!';
            lowOrHi.style.background = 'red';
        } else if (randNum < userNum) {
            lowOrHi.textContent = 'Ваше число больше загаданного!';
            lowOrHi.style.background = 'red';
        }
    }

    tries++;
    entryField.value = '';
    entryField.focus();
}

entry.addEventListener('click', guessTheNumber);

let popupOpacity = document.createElement('div');
let popupWindow = document.createElement('div');
let showRandNum = document.createElement('p');
let winOrDef = document.createElement('p');

function gameOver() {

    entryField.disabled = true;
    entry.disabled = true;

    resultDiv.removeChild(userResult);
    resultDiv.removeChild(mistakes);
    resultDiv.removeChild(lowOrHi);

    popupOpacity.classList.add('popup-opacity');
    popupWindow.classList.add('popup-window');
    document.body.appendChild(popupOpacity);
    document.body.appendChild(popupWindow);
    resetButton = document.createElement('button');
    resetButton.classList.add('popup-reset-button');
    resetButton.textContent = 'Начать сначала';

    function additionally() {
       
        popupWindow.appendChild(showRandNum);
        showRandNum.textContent = `Загаданное число: ${randNum}`;
        showRandNum.classList.add('showResult');

        popupWindow.appendChild(winOrDef);
        winOrDef.classList.add('user-win-or-def');

        if (randNum === Number(entryField.value)) {
            winOrDef.textContent = 'Вы выиграли!'
            winOrDef.style.background = 'green';
        } else {
            winOrDef.textContent = 'Вы проиграли!'
            winOrDef.style.background = 'red';
        }
    }

    additionally();

    popupWindow.appendChild(resetButton);

    resetButton.addEventListener('click', restartGame);
}

function restartGame() {

    afterMain.appendChild(resultDiv);
    resultDiv.appendChild(howMuchTries);

    howMuchTries.textContent = 'У Вас осталось 10 попыток';
    showRandNum.textContent = '';

    entryField.disabled = false;
    entry.disabled = false;

    popupWindow.removeChild(resetButton);
    document.body.removeChild(popupOpacity);
    document.body.removeChild(popupWindow);

    tries = 1;
    howManyTries = 10
    randNum = Math.floor(Math.random() * 100);
}