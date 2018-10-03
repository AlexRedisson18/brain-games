import readlineSync from 'readline-sync';

const engine = (instruction, game) => {
  console.log('Welcome to the Brain Games');
  console.log(`${instruction}`);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('');

  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const gameStatus = game();
    console.log(`Question: ${gameStatus.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === gameStatus.isCorrectAnswer) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameStatus.isCorrectAnswer}'.\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default engine;
