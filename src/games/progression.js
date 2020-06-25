import random from 'lodash/random.js';
import toString from 'lodash/toString.js';

const placeholder = '..';

const genSequence = (start, diff, limit) => {
  const iter = (acc, i) => {
    if (i === limit) return acc;

    return iter([...acc, start + diff * i], i + 1);
  };

  return iter([], 0);
};

const genQuestion = (sequence, index) => sequence
  .map((item, idx) => {
    if (idx === index) return placeholder;

    return item;
  })
  .join(' ');

const game = ({
  description: 'What number is missing in the progression?',
  generateData: () => {
    const step = random(1, 5);
    const limit = 10;
    const start = random(1, 50);

    const sequence = genSequence(start, step, limit);

    const randomIndex = random(0, sequence.length - 1);

    const question = genQuestion(sequence, randomIndex);

    const answer = start + step * randomIndex;

    return { question, answer: toString(answer) };
  },
});

export default game;
