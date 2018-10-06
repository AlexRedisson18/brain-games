export const getRandomNumber = (min, max) => Math.floor(min + (Math.random() * (max + (1 - min))));
/* изначально построил итеративную функцию для прогрессии, но
вспомнив совет ментора заменил на цикл с регулируемой длинною,
с использованием формулы, подмеченной в обсуждениях.
*/
export const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i <= length - 1; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
