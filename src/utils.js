import readlineSync from 'readline-sync';

export const say = console.log;

export const getUserName = () => readlineSync.question('May I have your name? ');
