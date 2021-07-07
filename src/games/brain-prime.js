import runGameEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number <= 1) {
    return 'no';
  }
  if (number > 2 && number % 2 === 0) {
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

function runGameLogic() {
  const question = Math.ceil(Math.random() * 1000);
  const rightAnswer = isPrime(question);

  return {
    question,
    rightAnswer,
  };
}

export default function runBrainPrime() {
  runGameEngine(description, runGameLogic);
}
