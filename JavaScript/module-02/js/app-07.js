let allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

let isLoginValid = function(allLogins, login) {
  if (login.length >= 4 && login.length < 16) {
    return true;
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

let isLoginUnique = function(allLogins, login) {
  for (let allLoginsItems of allLogins) {
    if (allLoginsItems !== login) {
    } else {
      alert('Такой логин уже используется!');
      return false;
    }
  }
  return true;
};

let addLogin = function(allLogins, login) {
  if (
    isLoginValid(allLogins, login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    allLogins = allLogins.push(login);
    alert('Логин успешно добавлен!');
  }
};

addLogin(allLogins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(allLogins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(allLogins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(allLogins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(allLogins);
