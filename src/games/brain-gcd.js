import random from 'lodash/random.js';

const genNumber = () => random(1, 100);

const gcd = (x, y) => {
  if (x === 0) return y;

  if (y === 0) return x;

  if (x > y) return gcd(x % y, y);

  return gcd(x, y % x);
};

const game = ({
  description: 'Find the greatest common divisor of given numbers.',
  genQuestion: () => `${genNumber()} ${genNumber()}`,
  genAnswer: (numbers) => {
    const [x, y] = numbers.split(' ');

    return gcd(x, y);
  },
});

export default game;
