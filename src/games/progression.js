import engine from '..';
import getRandomNumber from '../utils';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i <= length - 1; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const progressionLength = 10;

const description = 'What number is missing in this progression?';

const gameData = () => {
  const startValue = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progression = getProgression(startValue, progressionStep, progressionLength);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => engine(description, gameData);
