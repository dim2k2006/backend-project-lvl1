#!/usr/bin/env node

import greet from '../src/cli.js';
import { getUserName, say } from '../src/utils.js';

say('Welcome to the Brain Games!');

const userName = getUserName();

greet(userName);
