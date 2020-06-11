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

const game = ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  genQuestion: () => random(1, 100),
  genAnswer: number => (isPrime(number) ? 'yes' : 'no'),
});

export default game;
