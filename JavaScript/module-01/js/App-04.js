// goit-js-hw-01-task-04
const credits = 23580;
let pricePerDroid = 3000;
const howBuyDroid = prompt('Enter the number of drones');
const howBuyDroidNum = Number(howBuyDroid);
let totalPrice;
let message;
if (howBuyDroid === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = howBuyDroidNum * pricePerDroid;
  if (totalPrice <= credits && howBuyDroidNum >= 0) {
    message = `Вы купили ${howBuyDroidNum} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
  } else if (totalPrice >= credits && howBuyDroidNum !== NaN) {
    message = 'Недостаточно средств на счету!';
  } else {
    message = `Только цифры`;
  }
}
console.log(message);
alert(message);
// ======================
