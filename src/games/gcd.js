import random from 'lodash/random.js';

const gcd = (x, y) => {
  if (x === 0) return y;

  if (y === 0) return x;

  if (x > y) return gcd(x % y, y);

  return gcd(x, y % x);
};

const game = ({
  description: 'Find the greatest common divisor of given numbers.',
  generateData: () => {
    const x = random(1, 100);
    const y = random(1, 100);
    const question = `${x} ${y}`;
    const answer = gcd(x, y);

    return { question, answer };
  },
});

export default game;
