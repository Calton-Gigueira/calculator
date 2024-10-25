'use strict';

const display = document.querySelector('#display');

const displayResult = input => {
  display.value += input;
};

const clearDisplay = () => {
  if (display.value === 'Erro') {
    display.value = '';
    return;
  }

  const values = display.value;
  const newCharacter = values.slice(0, values.length - 1);
  display.value = newCharacter;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
};

const characters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '+',
  '-',
  '*',
  '/',
  '.',
];

const digitCaharcter = (e, character) => {
  if (e.key === character) {
    display.value += character;
  }
};

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (display.value !== '') {
      calculate();
    }
  } else if (e.key === 'Backspace') {
    clearDisplay();
  }

  characters.forEach(character => digitCaharcter(e, character));
});
