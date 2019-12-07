const formatString = function(string) {
  let arrLetters = string.split('');
  if (arrLetters.length <= 40) {
    arrLetters;
  } else {
    {
      arrLetters = `${arrLetters.slice(0, 39).join('')}...`;
      return arrLetters;
    }
  }
  return arrLetters.join('');
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
