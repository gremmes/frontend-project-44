#!/usr/bin/env node
/* eslint-disable no-trailing-spaces */

import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

const findDivisors = (number) => {
  const result = [1];
  
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) result.push(i);
  }
  
  return result;
};

const getArrayIntersection = (arr1, arr2) => {
  const result = [];
  
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i])) result.push(arr1[i]);
  }
  
  return result;
};

const gcdGame = async () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('Find the greatest common divisor of given numbers.');
  
  while (rightAnswers < 3 && wrongAnswers < 1) {
    // the randomMultiplier is not necessary but it gives more options
    const randomMultiplier = Math.floor(Math.random() * 10) + 1;
    const firstNumber = (Math.floor(Math.random() * 10) + 1) * randomMultiplier;
    const secondNumber = (Math.floor(Math.random() * 10) + 1) * randomMultiplier;
    const firstNumberDivisors = findDivisors(firstNumber);
    const secondNumberDivisors = findDivisors(secondNumber);
    const arrayIntersection = getArrayIntersection(firstNumberDivisors, secondNumberDivisors);
    const greatestCommonDivisor = arrayIntersection.pop().toString();
    const answer = isRight(`${firstNumber} ${secondNumber}`, greatestCommonDivisor);

    if (answer) {
      setRightAnswer();
      rightAnswers += 1;
    } else {
      setWrongAnswer(greatestCommonDivisor);
      wrongAnswers += 1;
    }
  }

  if (rightAnswers === 3) {
    setCongratulation();
  }
};

gcdGame();
