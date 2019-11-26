// goit-js-hw-01-task-05
const china = 'Китай'.toLowerCase();
const chile = 'Чили'.toLowerCase();
const australia = 'Австралия'.toLowerCase();
const india = 'Индия'.toLowerCase();
const jamaica = 'Ямайка'.toLowerCase();

let priceChina = 100;
let priceChile = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica = 120;

let costDelivery;
const enterCountry = prompt('Введите страну доставки');

if (enterCountry !== null) {
  switch (enterCountry.toLowerCase()) {
    case china:
      costDelivery = priceChina;
      break;

    case chile:
      costDelivery = priceChile;
      break;

    case australia:
      costDelivery = priceAustralia;
      break;

    case india:
      costDelivery = priceIndia;
      break;

    case jamaica:
      costDelivery = priceJamaica;
      break;

    default:
      costDelivery = 'В вашей стране доставка не доступна';
  }

  let alertMessage = `Доставка в ${enterCountry.toUpperCase()} будет стоить ${costDelivery} кредитов`;
  alert(alertMessage);
} else {
  alert(`Очень жаль!`);
}
// ======================
