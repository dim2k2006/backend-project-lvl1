import random from 'lodash/random.js';

const isPrime = (number) => {
  if (number < 2) return false;

  const limit = number - 1;

  const iter = (i) => {
    if (i > limit) return true;

    if (number % i === 0) return false;

    return iter(i + 1);
  };

  return iter(2);
};

const genQuestion = () => random(1, 100);

const genAnswer = number => (isPrime(number) ? 'yes' : 'no');

const game = ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  genData: () => {
    const question = genQuestion();
    const answer = genAnswer(question);

    return { question, answer };
  },
});

export default game;
