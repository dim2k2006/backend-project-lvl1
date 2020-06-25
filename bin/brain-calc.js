#!/usr/bin/env node

import engine from '../src/index.js';
import game from '../src/games/calc.js';

const init = () => {
  engine(game);
};

init();
