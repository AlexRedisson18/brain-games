import engine from '..';
import { getRandomNumber, getProgression } from '../utils/utils';

const description = 'What number is missing in this progression?';
// массивы в пройденных курсах  не встречал, .join .push взял с первых же попавшихся сайтов.
// также встречал варианты через .concat и array - но данные команды еще не освоил.
const gameData = () => {
  const startValue = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = getProgression(startValue, progressionStep, progressionLength);
  const lostItem = [getRandomNumber(0, 9)];
  const correctAnswer = String(progression[lostItem]);
  progression[lostItem] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => engine(description, gameData);
