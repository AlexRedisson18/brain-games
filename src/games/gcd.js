import engine from '..';
import getRandomNumber from '../random';

const instruction = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const first = getRandomNumber(100) + 1;
  const second = getRandomNumber(100) + 1;
  const answer = gcd(first, second);
  return {
    question: `${first} ${second}`,
    correctAnswer: String(answer),
  };
};

const runGcdGame = () => {
  engine(instruction, game);
};

export default runGcdGame;
