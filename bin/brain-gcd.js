#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameEngine from '../src/index.js';

const firstPhrase = 'Find the greatest common divisor of given numbers.';

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

function gameLogic(userName) {
  const number1 = Math.ceil(Math.random() * 51);
  const number2 = Math.ceil(Math.random() * 51);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = gcd(number1, number2);
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
