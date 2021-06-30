import gameIntro from './cli.js';

export default function gameEngine(firstPhrase, gameLogic) {
  const userName = gameIntro();

  console.log(firstPhrase);

  let counter = 0;
  let wrongAnswer = false;
  while (counter < 3 && !wrongAnswer) {
    if (gameLogic(userName) === true) {
      counter += 1;
    } else {
      wrongAnswer = true;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
