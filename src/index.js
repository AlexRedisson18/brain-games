import readlineSync from 'readline-sync';

const engine = (description, gameData) => {
  console.log('Welcome to the Brain Games');
  console.log(`${description}`);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('');

  for (let i = 0; i <= 2; i += 1) {
    //  не понял комментарий насчет "деструктивного присваивания" на строке ниже
    const gameStatus = gameData();
    console.log(`Question: ${gameStatus.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameStatus.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStatus.correctAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default engine;
