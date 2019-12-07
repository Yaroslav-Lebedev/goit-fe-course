const itemsArr = [];

const logItems = args => {
  for (let i = 0; i < args.length; i += 1) {
    console.log(`${[i + 1]} - ${args[i]}`);
  }
};
console.log(itemsArr);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
