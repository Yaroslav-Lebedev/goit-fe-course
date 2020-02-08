const countTotalSalary = function(employees) {
  const salaryArr = Object.values(employees);
  console.log(salaryArr);
  let totalSalary = 0;

  for (const itemSalary of salaryArr) {
    totalSalary += itemSalary;
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
