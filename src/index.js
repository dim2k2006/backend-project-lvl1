import readlineSync from 'readline-sync';

const roundsCount = 3;

const say = console.log;

const engine = ({ description, generateData }) => {
  say('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  say(`Hello, ${userName}!`);

  say(description);

  const runRound = (question, answer, attempt) => {
    if (attempt > roundsCount) {
      say(`Congratulations, ${userName}!`);

      return;
    }

    say(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      say(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);

      say(`Let's try again, ${userName}!`);

      return;
    }

    say('Correct!');

    const { question: nextQuestion, answer: nextAnswer } = generateData();

    runRound(nextQuestion, nextAnswer, attempt + 1);
  };

  const { question, answer } = generateData();

  runRound(question, answer, 1);
};

export default engine;
