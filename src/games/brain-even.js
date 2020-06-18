import random from 'lodash/random.js';

const isEven = number => number % 2 === 0;

const genQuestion = () => random(1, 100);

const genAnswer = number => (isEven(number) ? 'yes' : 'no');

const game = ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  genData: () => {
    const question = genQuestion();
    const answer = genAnswer(question);

    return { question, answer };
  },
});

export default game;
