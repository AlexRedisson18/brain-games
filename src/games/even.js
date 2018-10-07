import engine from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;

const gameData = () => {
  const number = getRandomNumber(2, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(description, gameData);
