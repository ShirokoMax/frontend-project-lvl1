import runGameEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function runGameLogic() {
  const question = Math.ceil(Math.random() * 20);
  const rightAnswer = isEven(question);

  return {
    question,
    rightAnswer,
  };
}

export default function runBrainEven() {
  runGameEngine(description, runGameLogic);
}
