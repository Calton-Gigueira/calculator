'use strict';

const display = document.querySelector('#display');
const calculateBtn = document.querySelector('.calculateBtn');
const clearBtn = document.querySelector('.clearBtn');
const charactersBtns = [...document.querySelectorAll('.characters')];
const menuButton = document.querySelector('.menu__button');
const symbolsContainer = document.querySelector('.symbols__container');
const symbolsBtns = [...document.querySelectorAll('.symbol')];

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

const symbols = ['[', '(', ')', ']', '%', ','];

const displayResult = input => {
  display.value += input;
};

const clearReturn = () => {
  display.value = '';
  return;
};

const clearDisplay = () => {
  if (display.value === 'Erro' || display.value === 'undefined') clearReturn();

  characters.forEach(character => {
    if (display.value === `Erro${character}`) clearReturn();
  });

  const values = display.value;
  const newCharacter = values.slice(0, values.length - 1);
  display.value = newCharacter;
};

const calculate = () => {
  try {
    if (display.value === undefined) clearReturn();

    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
};

const digitCharacter = (e, character) => {
  if (e.key === character) displayResult(character);
};

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (display.value !== '') calculate();
  } else if (e.key === 'Backspace') clearDisplay();

  characters.forEach(character => digitCharacter(e, character));
  symbols.forEach(symbol => digitCharacter(e, symbol));
});

charactersBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    characters.forEach(character => {
      if (character === btn.textContent) displayResult(character);
    });
  });
});

calculateBtn.addEventListener('click', calculate);

clearBtn.addEventListener('click', clearDisplay);

// MENU
menuButton.addEventListener('click', () => {
  symbolsContainer.classList.toggle('showSymbolsContrainer');
});

symbolsBtns.forEach(symbolBtn => {
  symbolBtn.addEventListener('click', () => {
    symbols.forEach(symbol => {
      if (symbol === symbolBtn.textContent) displayResult(symbol);
    });
  });
});
