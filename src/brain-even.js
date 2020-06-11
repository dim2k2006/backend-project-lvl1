import random from 'lodash/random.js';

const isEven = number => number % 2 === 0;

const game = ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  genQuestion: () => random(1, 100),
  genAnswer: number => (isEven(number) ? 'yes' : 'no'),
});

export default game;
