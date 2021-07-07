import runGameEngine from '../index.js';

const description = 'What number is missing in the progression?';

function createProgression() {
  const commonDiff = Math.ceil(Math.random() * 5);
  const progLength = Math.ceil(Math.random() * 6) + 4;

  const prog = [];
  prog.push(Math.ceil(Math.random() * 50));
  for (let i = 1; i < progLength; i += 1) {
    prog.push(prog[i - 1] + commonDiff);
  }
  return prog;
}

function runGameLogic() {
  const prog = createProgression();
  const randomIndex = Math.floor(Math.random() * prog.length);
  const rightAnswer = prog[randomIndex];
  prog[randomIndex] = '..';
  const question = prog.join(' ');

  return {
    question,
    rightAnswer,
  };
}

export default function runBrainProgression() {
  runGameEngine(description, runGameLogic);
}
