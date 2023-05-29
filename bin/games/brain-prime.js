#!/usr/bin/env node
import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

const isPrime = (number) => {
  if (number < 2) return false;

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) return false;
    divider += 1;
  }

  return true;
};

const expectedAnswer = (result) => {
  if (result === true) return 'yes';
  return 'no';
};

const primeGame = () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const randomNumber = Math.floor(Math.random() * (25 - 0));
    const result = isPrime(randomNumber);
    const rightAnswer = expectedAnswer(result);
    const answer = isRight(randomNumber, rightAnswer);

    if (answer) {
      setRightAnswer();
      rightAnswers += 1;
    } else {
      setWrongAnswer(rightAnswer);
      wrongAnswers += 1;
    }
  }

  if (rightAnswers === 3) {
    setCongratulation();
  }
};

primeGame();
