function analyzeArray(numbersArray) {
  const min = () => Math.min(...numbersArray);
  const max = () => Math.max(...numbersArray);
  const length = () => numbersArray.length;
  const average = () =>
    numbersArray.reduce((val, acc) => val + acc, 0) / numbersArray.length;

  const obj = {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };

  return obj;
}

module.exports = analyzeArray;
