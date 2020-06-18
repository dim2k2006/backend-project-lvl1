import readlineSync from 'readline-sync';
import toString from 'lodash/toString.js';
import {
  say,
  getUserName,
  greet,
  welcome,
} from './cli.js';

const rounds = 3;

const engine = (description, genData) => {
  welcome();

  const userName = getUserName();

  greet(userName);

  say(description);

  const round = (question, answer, attempt) => {
    if (attempt > rounds) {
      say(`Congratulations, ${userName}!`);

      return;
    }

    say(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (toString(userAnswer) !== toString(answer)) {
      say(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);

      say(`Let's try again, ${userName}!`);

      return;
    }

    say('Correct!');

    const { question: nextQuestion, answer: nextAnswer } = genData();

    round(nextQuestion, nextAnswer, attempt + 1);
  };

  const { question, answer } = genData();

  round(question, answer, 1);
};

export default engine;
