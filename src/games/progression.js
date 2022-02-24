import runGameEngine from '../index.js';
import genRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

const createProgression = (firstNum, commonDiff, progLength) => {
  const prog = [];
  prog.push(firstNum);
  for (let i = 1; i < progLength; i += 1) {
    prog.push(prog[i - 1] + commonDiff);
  }
  return prog;
};

const genRound = () => {
  const firstNum = genRandomInteger(1, 50);
  const commonDiff = genRandomInteger(1, 6);
  const progLength = genRandomInteger(1, 6) + 4;
  const prog = createProgression(firstNum, commonDiff, progLength);

  const randomIndex = genRandomInteger(0, prog.length - 1);
  const rightAnswer = String(prog[randomIndex]);
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
