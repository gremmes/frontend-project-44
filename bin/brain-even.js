import readlineSync from 'readline-sync';

let name;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

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

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === result) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      wrongAnswers += 1;
    }
  }

  if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

evenGame();
