import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

export default function runBrainPrime() {
  const firstPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  function isPrime(number) {
    if (number <= 1) {
      return 'no';
    }
    if (number % 2 === 0) {
      return 'no';
    }
    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }

  function gameLogic(userName) {
    const randomNumber = Math.ceil(Math.random() * 1000);
    const rightAnswer = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    if (answer === rightAnswer) {
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
