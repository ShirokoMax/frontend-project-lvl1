import readlineSync from 'readline-sync';
import runGameIntro from './cli.js';

export default function runGameEngine(description, runGameLogic) {
  const userName = runGameIntro();

  console.log(description);

  let counter = 0;
  while (counter < 3) {
    const { question, rightAnswer } = runGameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerNumber = typeof rightAnswer;

    if (isAnswerNumber === 'number' ? Number(userAnswer) === rightAnswer : userAnswer === rightAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
