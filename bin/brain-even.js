#!/usr/bin/env node

import game from '../src/brain-even.js';
import { greet, getUserName, say } from '../src/cli.js';

const init = () => {
  say('Welcome to the Brain Games!');

  const userName = getUserName();

  greet(userName);

  game(userName);
};

init();
