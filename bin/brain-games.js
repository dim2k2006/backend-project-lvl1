#!/usr/bin/env node

import { greet, getUserName, say } from '../src/cli.js';

say('Welcome to the Brain Games!');

const userName = getUserName();

greet(userName);
