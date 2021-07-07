import runGameEngine from '../index.js';

const description = 'What is the result of the expression?';

function calc(operator, number1, number2) {
  let result;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error('This mathematical operator is missing. The operator must be "+", "-" or "*".');
  }
  return result;
}

function runGameLogic() {
  const mathOperators = ['+', '-', '*'];
  const randomOperator = mathOperators[Math.floor(Math.random() * 3)];
  const question = `${Math.ceil(Math.random() * 20)} ${randomOperator} ${Math.ceil(Math.random() * 20)}`;
  const numbers = question.split(randomOperator);
  const number1 = Number(numbers[0]);
  const number2 = Number(numbers[1]);
  const rightAnswer = calc(randomOperator, number1, number2);

  return {
    question,
    rightAnswer,
  };
}

export default function runBrainCalc() {
  runGameEngine(description, runGameLogic);
}
