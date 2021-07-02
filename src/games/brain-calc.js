import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

export default function runBrainCalc() {
  const firstPhrase = 'What is the result of the expression?';

  function evalExpression(string, symbol) {
    const array = string.split(symbol);
    let result;

    switch (symbol) {
      case '+':
        result = Number(array[0]) + Number(array[1]);
        break;
      case '-':
        result = Number(array[0]) - Number(array[1]);
        break;
      case '*':
        result = Number(array[0]) * Number(array[1]);
        break;
      default:
        result = null;
    }
    return result;
  }

  function gameLogic(userName) {
    const mathSymbols = ['+', '-', '*'];
    const randomSymbol = mathSymbols[Math.floor(Math.random() * 3)];
    const expression = `${Math.ceil(Math.random() * 20)} ${randomSymbol} ${Math.ceil(Math.random() * 20)}`;
    const rightAnswer = evalExpression(expression, randomSymbol);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    let result;

    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
    }
    return result;
  }

  gameEngine(firstPhrase, gameLogic);
}
