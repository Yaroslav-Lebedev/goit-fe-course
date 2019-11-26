// goit-js-hw-01-task-06
// let total = 0;
// let userAdd;

// do {
//   userAdd = prompt('Введи число');
//   total = Number(userAdd) + total;
// } while (userAdd !== null);

// console.log(total);
// alert(`Общая сумма чисел равна ${total}`);
// ======================

// goit-js-hw-01-task-06++
let total = 0;
let userAdd;
do {
  userAdd = prompt('Введи число');
  if (isNaN(userAdd)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else {
    total = Number(userAdd) + total;
  }
} while (userAdd !== null);

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
// ======================
