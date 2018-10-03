import engine from '..';
import getRandomNumber from '../random';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const randomNum = getRandomNumber(50);

  const isEven = randomNum % 2 === 0;
  return {
    question: `${randomNum}`,
    correctAnswer: isEven ? 'yes' : 'no',
  };
};

const runEvenGame = () => {
  engine(instruction, game);
};

export default runEvenGame;
