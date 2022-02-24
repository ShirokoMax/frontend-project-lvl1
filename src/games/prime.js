import runGameEngine from '../index.js';
import genRandomInteger from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number > 2 && number % 2 === 0) {
    return false;
  }
  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genRound = () => {
  const question = genRandomInteger(1, 1000);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

const runBrainPrime = () => {
  runGameEngine(description, genRound);
};

export default runBrainPrime;
