import engine from '..';
import getRandomNumber from '../random';

const instruction = 'What is the result of the expression?';

const game = () => {
  const operators = ['+', '-', '*'];
  const sign = operators[getRandomNumber(3)];
  const first = getRandomNumber(10);
  const second = getRandomNumber(10);
  const getAnswer = (operator) => {
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    return first * second;
  };
  return {
    question: `${first} ${sign} ${second}`,
    correctAnswer: String(getAnswer(sign)),
  };
};

const runCalcGame = () => {
  engine(instruction, game);
};
export default runCalcGame;
