import runGameEngine from '../index.js';
import randomInteger from '../utils.js';

const description = 'What is the result of the expression?';

const calc = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('This mathematical operator is missing. The operator must be "+", "-" or "*".');
  }
};

const genRound = () => {
  const mathOperators = ['+', '-', '*'];
  const randomOperator = mathOperators[randomInteger(0, 2)];
  const question = `${randomInteger(1, 20)} ${randomOperator} ${randomInteger(1, 20)}`;
  const numbers = question.split(randomOperator);
  const number1 = Number(numbers[0]);
  const number2 = Number(numbers[1]);
  const rightAnswer = calc(randomOperator, number1, number2);

  return {
    question,
    rightAnswer,
  };
};

const runBrainCalc = () => {
  runGameEngine(description, genRound);
};

export default runBrainCalc;
