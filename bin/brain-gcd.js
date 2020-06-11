#!/usr/bin/env node

import engine from '../src/index.js';
import game from '../src/games/brain-gcd.js';
import { greet, getUserName, say } from '../src/cli.js';

const init = () => {
  say('Welcome to the Brain Games!');

  const userName = getUserName();

  greet(userName);

  engine(userName, game.description, game.genQuestion, game.genAnswer);
};

init();
