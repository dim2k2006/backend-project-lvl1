#!/usr/bin/env node

import engine from '../src/index.js';
import game from '../src/games/brain-prime.js';

const init = () => {
  engine(game.description, game.genData);
};

init();
