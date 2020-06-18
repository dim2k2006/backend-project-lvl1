#!/usr/bin/env node

import engine from '../src/index.js';
import game from '../src/games/brain-calc.js';

const init = () => {
  engine(game.description, game.genQuestion, game.genAnswer);
};

init();
