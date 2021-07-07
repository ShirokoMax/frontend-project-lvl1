import runGameEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function gcd(number1, number2) {
  let x = number1;
  let y = number2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function runGameLogic() {
  const number1 = Math.ceil(Math.random() * 51);
  const number2 = Math.ceil(Math.random() * 51);
  const question = `${number1} ${number2}`;
  const rightAnswer = gcd(number1, number2);

  return {
    question,
    rightAnswer,
  };
}

export default function runBrainGCD() {
  runGameEngine(description, runGameLogic);
}
