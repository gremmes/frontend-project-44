#!/usr/bin/env node
import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

let missedElem;

const createProgression = () => {
  const progressionArr = [];
  const arrLength = 10;
  const firstProgressionElem = Math.floor(Math.random() * (50 - 0));
  let currentProgressionElem = firstProgressionElem;
  const progressionStep = Math.floor(Math.random() * (10 - 1) + 1);
  const indexMissedElem = Math.floor(Math.random() * (arrLength - 0));

  for (let i = 0; i < arrLength; i += 1) {
    if (i === indexMissedElem) {
      progressionArr.push('..');
      missedElem = currentProgressionElem;
    } else {
      progressionArr.push(currentProgressionElem);
    }
    currentProgressionElem += progressionStep;
  }

  return progressionArr;
};

const progressionGame = () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('What number is missing in the progression?');

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const progressionStr = createProgression().join(' ');
    const answer = isRight(progressionStr, missedElem.toString());

    if (answer) {
      setRightAnswer();
      rightAnswers += 1;
    } else {
      setWrongAnswer(missedElem);
      wrongAnswers += 1;
    }
  }

  if (rightAnswers === 3) {
    setCongratulation();
  }
};

progressionGame();
