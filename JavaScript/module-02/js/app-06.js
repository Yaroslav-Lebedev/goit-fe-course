let total = 0;
let input;
const numbers = [];
do {
  input = prompt('Введи число');
  if (isNaN(input)) {
    alert('Только числа');
    continue;
  } else {
    let res = Number(input);
    numbers.push(res);
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}

alert(`Общая сумма чисел равна ${total}`);
