let randNum = Math.floor(Math.random() * 100);

let entryField = document.querySelector('.main-field_entryField');
let entry = document.querySelector('.main-field_entryBtn');

let afterMain = document.querySelector('.main');
let resultDiv = document.createElement('div');
resultDiv.classList.add('main-result_wrapper');
let userTries = document.createElement('p');
let result = document.createElement('p');
let answer = document.createElement('p');
let lowOrHi = document.createElement('p');

let tries = 1;
howManyTries = 10;
let resetButton;

afterMain.appendChild(resultDiv);
resultDiv.appendChild(userTries);

userTries.textContent = 'У Вас осталось 10 попыток';

function guessTheNumber() {

    let userNum = Number(entryField.value);

    afterMain.appendChild(resultDiv);

    resultDiv.appendChild(result);
    resultDiv.appendChild(answer);
    resultDiv.appendChild(lowOrHi);

    --howManyTries;

    if (howManyTries < 5 && howManyTries > 1) {
        userTries.textContent = `У Вас осталось ${howManyTries} попытки`;
    } else {
        if (howManyTries === 1) {
            userTries.textContent = `У Вас осталось ${howManyTries} попытка`;
        } else {
            userTries.textContent = `У Вас осталось ${howManyTries} попыток`;
        }
    }

    if (tries === 1) {
        result.textContent = 'Ваши попытки: ';
    }

    result.textContent += userNum + ' ';

    if (randNum === userNum) {
        answer.textContent = 'Вы угадали число! Поздравляем!';
        answer.style.background = '#AAFF00';
        resultDiv.removeChild(lowOrHi);
        gameOver();
    } else if (tries === 10) {
        answer.textContent = 'Попыток больше нет! Вы проиграли!';
        answer.style.background = '#A52A2A';
        resultDiv.removeChild(lowOrHi);
        gameOver();
    } else {
        answer.textContent = 'Ошибка!';
        answer.style.background = '#A52A2A';
        if (randNum > userNum) {
        lowOrHi.textContent = 'Ваше число меньше загаданного!';
        lowOrHi.style.background = '#A52A2A';
        } else if (randNum < userNum) {
            lowOrHi.textContent = 'Ваше число больше загаданного!';
            lowOrHi.style.background = '#A52A2A';
        }
    }

    tries++;
    entryField.value = '';
    entryField.focus();
}

entry.addEventListener('click', guessTheNumber);

function gameOver() {
    
    entryField.disabled = true;
    entry.disabled = true;

    resetButton = document.createElement('button');
    resetButton.classList.add('button')
    resetButton.textContent = 'Заново';
    resultDiv.appendChild(resetButton);
    
    resetButton.addEventListener('click', clearFields)
}

function clearFields() {
    
    tries = 1;
    howManyTries = 10;
    
    entryField.disabled = false;
    entry.disabled = false;
    
    resultDiv.removeChild(resetButton);
    userTries.textContent = 'У Вас осталось 10 попыток';
    answer.textContent = '';
    result.textContent = '';

    randNum = Math.floor(Math.random() * 100);
    entryField.value = '';
    entryField.focus();
}