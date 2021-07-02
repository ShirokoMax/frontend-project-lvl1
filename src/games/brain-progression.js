import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

export default function runBrainProgression() {
  const firstPhrase = 'What number is missing in the progression?';

  function gameLogic(userName) {
    const commonDiff = Math.ceil(Math.random() * 5);
    const progLength = Math.ceil(Math.random() * 6) + 4;

    const prog = [];
    prog.push(Math.ceil(Math.random() * 50));
    for (let i = 1; i < progLength; i += 1) {
      prog.push(prog[i - 1] + commonDiff);
    }

    const randomIndex = Math.floor(Math.random() * progLength);
    const rightAnswer = prog[randomIndex];
    prog[randomIndex] = '..';
    console.log(`Question: ${prog.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    let result;
    if (Number(answer) === rightAnswer) {
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
