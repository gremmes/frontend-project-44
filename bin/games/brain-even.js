import {
  greeting,
  isRight,
  setRightAnswer,
  setWrongAnswer,
  setCongratulation,
} from '../../src/index.js';

const isEven = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const getRandomNumber = () => Math.floor(Math.random() * (100 - 0));

const evenGame = () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const randomNumber = getRandomNumber();
    const result = isEven(randomNumber);
    const answer = isRight(randomNumber, result);

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

evenGame();
