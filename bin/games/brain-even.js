#!/usr/bin/env node
import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

const isEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

const expectedAnswer = (result) => {
  if (result === true) return 'yes';
  return 'no';
};

const evenGame = () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const randomNumber = Math.floor(Math.random() * (100 - 0));
    const result = isEven(randomNumber);
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

evenGame();
