import readlineSync from 'readline-sync';

const engine = (instruction, game) => {
  console.log('Welcome to the Brain Games');
  console.log(`${instruction}`);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const gameStatus = game();
    console.log(`Question: ${gameStatus.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameStatus.correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStatus.correctAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default engine;
