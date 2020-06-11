import random from 'lodash/random.js';
import range from 'lodash/range.js';

const step = 2;

const limit = 10;

const placeholder = '..';

const game = ({
  description: 'What number is missing in the progression?',
  genQuestion: () => {
    const randomIndex = random(0, limit - 1);

    const sequence = range(random(1, 50), limit, step)
      .map((number, idx) => {
        if (idx === randomIndex) return placeholder;

        return number;
      });

    return sequence;
  },
  genAnswer: (sequence) => {
    const iter = (list, pointer) => {
      if (pointer > list.length) return null;

      const item = list[pointer];
      const prevItem = list[pointer - 1];

      if (item === placeholder) return prevItem + step;

      return iter(list, pointer + 1);
    };

    return iter(sequence, 0);
  },
});

export default game;
