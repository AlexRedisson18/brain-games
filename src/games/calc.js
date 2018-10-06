import engine from '..';
import getRandomNumber from '../utils';


const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const gameData = () => {
  const sign = operators[getRandomNumber(0, operators.length - 1)];
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
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
