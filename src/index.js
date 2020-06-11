import readlineSync from 'readline-sync';
import toString from 'lodash/toString.js';
import { say } from './cli.js';

const rounds = 3;

const engine = (user, description, genQuestion, genAnswer) => {
  say(description);

  const round = (question, answer, attempt) => {
    if (attempt > rounds) {
      say(`Congratulations, ${user}!`);

      return;
    }

    say(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (toString(userAnswer) !== toString(answer)) {
      say(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);

      say(`Let's try again, ${user}!`);

      return;
    }

    say('Correct!');

    const nextQuestion = genQuestion();
    const nextAnswer = genAnswer(nextQuestion);

    round(nextQuestion, nextAnswer, attempt + 1);
  };

  const question = genQuestion();
  const answer = genAnswer(question);

  round(question, answer, 1);
};

export default engine;
