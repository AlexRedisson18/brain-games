import engine from '..';
import getRandomNumber from '../random';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const gameData = () => {
  const sign = operators[getRandomNumber(3)];
  const a = getRandomNumber(10);
  const b = getRandomNumber(10);
  let question = '';
  let correctAnswer = '';
  switch (sign) {
    case '+':
      question = `${a} + ${b}`;
      correctAnswer = String(a + b);
      break;
    case '-':
      question = `${a} - ${b}`;
      correctAnswer = String(a - b);
      break;
    case '*':
      question = `${a} * ${b}`;
      correctAnswer = String(a * b);
      break;
    default:
  }
  return { question, correctAnswer };
};

export default () => engine(description, gameData);
