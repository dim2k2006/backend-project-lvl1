import random from 'lodash/random.js';
import toNumber from 'lodash/toNumber.js';

const operatorsMap = {
  0: '+',
  1: '-',
  2: '*',
};

const getOperator = (id) => {
  const operator = operatorsMap[id];

  if (!operator) throw new Error('Provide correct operator id.');

  return operator;
};

const genOperator = () => getOperator(random(0, 2));

const genNumber = () => random(1, 10);

const genQuestion = () => {
  const operand1 = genNumber();
  const operand2 = genNumber();
  const operator = genOperator();

  return `${operand1} ${operator} ${operand2}`;
};

const processMap = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
};

const getProcess = (operator) => {
  const process = processMap[operator];

  if (!process) throw new Error('Provide correct operator.');

  return process;
};

const genAnswer = (expression) => {
  const [operand1, operator, operand2] = expression.split(' ');

  const process = getProcess(operator);

  return process(toNumber(operand1), toNumber(operand2));
};

const game = ({
  description: 'What is the result of the expression?',
  genData: () => {
    const question = genQuestion();
    const answer = genAnswer(question);

    return { question, answer };
  },
});

export default game;
