import runGameEngine from '../index.js';

const description = 'What number is missing in the progression?';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const createProgression = () => {
  const commonDiff = randomInteger(1, 6);
  const progLength = randomInteger(1, 6) + 4;

  const prog = [];
  prog.push(randomInteger(1, 50));
  for (let i = 1; i < progLength; i += 1) {
    prog.push(prog[i - 1] + commonDiff);
  }
  return prog;
};

const genRound = () => {
  const prog = createProgression();
  const randomIndex = randomInteger(0, prog.length);
  const rightAnswer = prog[randomIndex];
  prog[randomIndex] = '..';
  const question = prog.join(' ');

  return {
    question,
    rightAnswer,
  };
};

const runBrainProgression = () => {
  runGameEngine(description, genRound);
};

export default runBrainProgression;
