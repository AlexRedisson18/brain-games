import engine from '..';
import getRandomNumber from '../random';

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const first = getRandomNumber(100) + 1;
  const second = getRandomNumber(100) + 1;
  const getAnswer = gcd(first, second);
  const question = `${first} ${second}`;
  const correctAnswer = String(getAnswer);
  return { question, correctAnswer };
};

export default () => engine(description, gameData);
