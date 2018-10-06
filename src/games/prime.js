import engine from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const number = getRandomNumber(0, 500);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => engine(description, gameData);
