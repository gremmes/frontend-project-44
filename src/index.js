import readlineSync from 'readline-sync';

let name;
let userAnswer;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const isRight = (expression, correctAnswer) => {
  console.log(`Question: ${expression}`);
  userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) return true;
  return false;
};

export const setRightAnswer = () => console.log('Correct!');

export const setWrongAnswer = (result) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
};

export const setCongratulation = () => console.log(`Congratulations, ${name}!`);
