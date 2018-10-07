import engine from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameData = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const question = `${first} ${second}`;
  const correctAnswer = String(gcd(first, second));
  return [question, correctAnswer];
};

export default () => engine(description, gameData);
