import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const sayHelloToUser = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};

export default sayHelloToUser;
