import random from 'lodash/random.js';
import keys from 'lodash/keys.js';
import find from 'lodash/find.js';
import get from 'lodash/get.js';

const operatorsMap = [
  { operator: '+', process: (operand1, operand2) => operand1 + operand2 },
  { operator: '-', process: (operand1, operand2) => operand1 - operand2 },
  { operator: '*', process: (operand1, operand2) => operand1 * operand2 },
];

const getOperator = (id) => {
  const item = operatorsMap[id];

  const operator = get(item, 'operator');

  if (!operator) throw new Error('Provide correct operator id.');

  return operator;
};

const genOperator = () => getOperator(random(0, operatorsMap.length - 1));

const getProcess = (operator) => {
  const item = find(operatorsMap, i => i.operator === operator);

  const process = get(item, 'process');

  if (!process) throw new Error('Provide correct operator.');

  return process;
};

const genAnswer = (operand1, operand2, operator) => {
  const process = getProcess(operator);

  return process(operand1, operand2);
};

const game = ({
  description: 'What is the result of the expression?',
  genData: () => {
    const operand1 = random(1, 10);
    const operand2 = random(1, 10);
    const operator = genOperator();
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = genAnswer(operand1, operand2, operator);

    return { question, answer };
  },
});

export default game;
