// goit-js-hw-01-task-03
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Enter password');
if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
alert(message);
// ======================
