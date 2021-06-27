#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../src/cli.js';

const userName = startGame();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
let wrongAnswer = false;
while (counter < 3 && !wrongAnswer) {
  const number = Math.ceil(Math.random() * 20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0 && answer === 'yes') {
    counter += 1;
    console.log('Correct!');
  } else if (number % 2 !== 0 && answer === 'no') {
    counter += 1;
    console.log('Correct!');
  } else {
    wrongAnswer = true;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? 'yes' : 'no'}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${userName}!`);
}
