import readlineSync from 'readline-sync';

export const say = console.log;

export const greet = (userName) => {
  say(`Hello, ${userName}!`);
};

export const getUserName = () => readlineSync.question('May I have your name? ');
