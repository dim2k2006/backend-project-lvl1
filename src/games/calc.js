import random from 'lodash/random.js';
import keys from 'lodash/keys.js';
import toString from 'lodash/toString.js';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const getOperator = (index) => {
  const operators = keys(operations);

  const operator = operators[index];

  if (!operator) throw new Error('Invalid operator index.');

  return operator;
};

const getProcess = (operator) => {
  const process = operations[operator];

  if (!process) throw new Error('Invalid operator type.');

  return process;
};

const genAnswer = (operand1, operand2, operator) => {
  const process = getProcess(operator);

  return process(operand1, operand2);
};

const game = ({
  description: 'What is the result of the expression?',
  generateData: () => {
    const operand1 = random(1, 10);
    const operand2 = random(1, 10);
    const operator = getOperator(random(0, keys(operations).length - 1));
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = genAnswer(operand1, operand2, operator);

    return { question, answer: toString(answer) };
  },
});

export default game;
