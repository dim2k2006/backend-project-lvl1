import readlineSync from 'readline-sync';
import random from 'lodash/random';
import { say } from './cli.js';

const attempts = 3;

const isEven = number => number % 2 === 0;

const genData = (number) => {
  const question = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return { question, answer };
};

const game = (user) => {
  say('Answer "yes" if the number is even, otherwise answer "no".');

  const round = (question, answer, attempt) => {
    if (attempt > attempts) {
      say(`Congratulations, ${user}!`);

      return;
    }

    say(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      say(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);

      say(`Let's try again, ${user}!`);

      return;
    }

    say('Correct!');

    const data = genData(random(1, 100));

    round(data.question, data.answer);
  };

  const data = genData(random(1, 100));

  round(data.question, data.answer, 1);
};

export default game;
