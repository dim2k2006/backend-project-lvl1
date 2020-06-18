import random from 'lodash/random.js';

const genNumber = () => random(1, 100);

const gcd = (x, y) => {
  if (x === 0) return y;

  if (y === 0) return x;

  if (x > y) return gcd(x % y, y);

  return gcd(x, y % x);
};

const genQuestion = () => `${genNumber()} ${genNumber()}`;

const genAnswer = (numbers) => {
  const [x, y] = numbers.split(' ');

  return gcd(x, y);
};

const game = ({
  description: 'Find the greatest common divisor of given numbers.',
  genData: () => {
    const question = genQuestion();
    const answer = genAnswer(question);

    return { question, answer };
  },
});

export default game;
