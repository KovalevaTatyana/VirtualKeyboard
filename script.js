const div = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');


div.className = 'container';
title.className = 'title';
textarea.className = 'textarea';
textarea.setAttribute('autofocus', 'true');
keyboard.className = 'keyboard';

title.innerHTML = "RSS Virtual Keyboard";

document.body.append(div);
div.append(title);
div.append(textarea);
div.append(keyboard);

const keyboardEnglish = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
  ['capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];
const keyboardEnglishShift = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
  ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
  ['capsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];
const keyboardEnglishCaps = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
  ['capsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter'],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];
const keyboardRussian = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
  ['capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
  ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];
const keyboardRussianShift = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
  ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
  ['capsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
  ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];
const keyboardRussianCaps = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'del'],
  ['capsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
  ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl']
];

for (let i = 0; i < keyboardEnglish.length; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < keyboardEnglish[i].length; j++) {
        const button = document.createElement('div');
        const caseDownEng = document.createElement('span');
        const caseUpEng = document.createElement('span');
        const caseDownRus = document.createElement('span');
        const caseUpRus = document.createElement('span');

        button.className = 'button';
        caseDownEng.className = 'caseDownEng';
        caseUpEng.className = 'caseUpEng';
        caseDownRus.className = 'caseDownRus';
        caseUpRus.className = 'caseUpRus';

        caseDownEng.innerHTML = `${keyboardEnglish[i][j]}`;
        caseUpEng.innerHTML = `${keyboardEnglishShift[i][j]}`;
        caseDownRus.innerHTML = `${keyboardRussian[i][j]}`;
        caseUpRus.innerHTML = `${keyboardRussianShift[i][j]}`;

        row.append(button);
        button.append(caseDownEng);
        button.append(caseUpEng);
        button.append(caseDownRus);
        button.append(caseUpRus);
    }
keyboard.append(row);
}
let caseDownEng = document.querySelectorAll('.caseDownEng');
let caseUpEng = document.querySelectorAll('.caseUpEng');
let caseDownRus = document.querySelectorAll('.caseDownRus');
let caseUpRus = document.querySelectorAll('.caseUpRus');
    caseDownEng.forEach(el => el.classList.add('layout'));
    caseDownEng.forEach(el => el.classList.add('registr'));
    caseDownRus.forEach(el => el.classList.add('registr'));
    caseUpEng.forEach(el => el.classList.add('layout'));
document.addEventListener('keydown', function (event) {
    if (event.shiftKey) {
        caseDownEng.forEach(el => el.classList.remove('registr'));
        caseDownRus.forEach(el => el.classList.remove('registr'));
        caseUpEng.forEach(el => el.classList.add('registr'));
        caseUpRus.forEach(el => el.classList.add('registr'));
    }
    if (event.ctrlKey && event.altKey) {
        caseDownEng.forEach(el => el.classList.toggle('layout'));
        caseDownRus.forEach(el => el.classList.toggle('layout'));
        caseUpEng.forEach(el => el.classList.toggle('layout'));
        caseUpRus.forEach(el => el.classList.toggle('layout'));
    }
})
document.addEventListener('keyup', function (event) {
    if (!event.shiftKey) {
        caseDownEng.forEach(el => el.classList.add('registr'));
        caseDownRus.forEach(el => el.classList.add('registr'));
        caseUpEng.forEach(el => el.classList.remove('registr'));
        caseUpRus.forEach(el => el.classList.remove('registr'));
    }
})
keyboard.addEventListener('mousedown', function (event) {
    let element = '';
        if (event.target.className === 'keyboard' || event.target.className === 'row') return;
        else {
            element = event.target;
            if (element.innerText === 'space') {
                textarea.value += ' ';
            }
            else {
                textarea.value += element.innerText;
            }
        }
});
