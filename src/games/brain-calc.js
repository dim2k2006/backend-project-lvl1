import random from 'lodash/random.js';
import exprEval from 'expr-eval';

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

const game = ({
  description: 'What is the result of the expression?',
  genQuestion: () => {
    const operand1 = genNumber();
    const operand2 = genNumber();
    const operator = genOperator();

    return `${operand1} ${operator} ${operand2}`;
  },
  genAnswer: expression => exprEval.Parser.evaluate(expression),
});

export default game;
