import random from 'lodash/random.js';

const getSmallestDivisor = (x) => {
  const iter = (n, testDivisor) => {
    if (testDivisor * testDivisor > n) return n;

    if (n % testDivisor === 0) return testDivisor;

    return iter(n, testDivisor + 1);
  };

  return iter(x, 2);
};

const isPrime = x => x === getSmallestDivisor(x);

const game = ({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateData: () => {
    const question = random(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';

    return { question, answer };
  },
});

export default game;
