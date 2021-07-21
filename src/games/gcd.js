import runGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let x = number1;
  let y = number2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const genRound = () => {
  const number1 = randomInteger(1, 51);
  const number2 = randomInteger(1, 51);
  const question = `${number1} ${number2}`;
  const rightAnswer = gcd(number1, number2);

  return {
    question,
    rightAnswer,
  };
};

const runBrainGCD = () => {
  runGameEngine(description, genRound);
};

export default runBrainGCD;
