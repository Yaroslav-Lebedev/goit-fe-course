// goit-js-hw-01-task-02
const total = 100;
const ordered = Number(prompt());
let message;
if (ordered > total) {
  message = `На складе недостаточно твоаров!`;
} else if (ordered === 0) {
  message = `Очень жаль, что вы ничего не заказали. Будем ждать ваших заказов!`;
} else if (ordered > 0 && ordered <= total) {
  message = `Заказ оформлен, с вами свяжется менеджер`;
} else {
  message = `Введите целое значение (только цифры)`;
}
console.log(message);
alert(message);
// ======================
