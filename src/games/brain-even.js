import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

export default function runBrainEven() {
  const firstPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';

  function gameLogic(userName) {
    const number = Math.ceil(Math.random() * 20);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      result = true;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
    }
    return result;
  }

  gameEngine(firstPhrase, gameLogic);
}
