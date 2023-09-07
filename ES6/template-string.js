const prices = ["10", "23", "19"];

const highThan20 = prices
  .filter((price) => price > 20)
  .map((price) => `R$ ${price},00`); // template string ${}

console.log(highThan20);
