import random from 'lodash/random.js';

const isEven = number => number % 2 === 0;

const game = ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  genData: () => {
    const question = random(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    return { question, answer };
  },
});

export default game;
