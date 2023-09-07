const prices = ["10", "23", "19"];

// const valuesFormatted = prices.map(function (price) {
//   return `R$ ${price},00`;
// });

const valuesFormatted = prices.map((price) => {
  return `R$ ${price},00`;
});

console.log(valuesFormatted);

const highThan20 = prices
  .filter((price) => price > 20)
  .map((price) => `R$ ${price},00`);

console.log(highThan20);
