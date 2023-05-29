#!/usr/bin/env node
import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

let symbol;

// choosing the symbol of the operation and do it
const operationResult = (a, b) => {
  const numberSymbol = Math.floor(Math.random() * 4);
  let result;

  switch (numberSymbol) {
    case 1:
      symbol = '+';
      result = a + b;
      break;

    case 2:
      symbol = '-';
      result = a - b;
      break;

    default:
      symbol = '*';
      result = a * b;
      break;
  }

  return result;
};

const calculatorGame = () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('What is the result of the expression?');

  while (rightAnswers < 3 && wrongAnswers < 1) {
    // the randomMultiplier is used to get at least one common integer divisor
    // in case of a division operation
    const randomMultiplier = Math.floor(Math.random() * 4) + 2;
    const secondOperand = Math.floor(Math.random() * 25) + 1;
    const firstOperand = secondOperand * randomMultiplier;
    const result = operationResult(firstOperand, secondOperand).toString();
    const answer = isRight(`${firstOperand} ${symbol} ${secondOperand}`, result);

    if (answer) {
      setRightAnswer();
      rightAnswers += 1;
    } else {
      setWrongAnswer(result);
      wrongAnswers += 1;
    }
  }

  if (rightAnswers === 3) {
    setCongratulation();
  }
};

calculatorGame();
