import runGameEngine from '../index.js';
import randomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const genRound = () => {
  const question = randomInteger(1, 20);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    rightAnswer,
  };
};

const runBrainEven = () => {
  runGameEngine(description, genRound);
};

export default runBrainEven;
