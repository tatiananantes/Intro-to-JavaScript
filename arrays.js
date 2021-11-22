const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(nameAndDiscount => {
    const name = nameAndDiscount[0];
    const discount = nameAndDiscount[1];
    return `Hi ${name}! ${discount}% off our best candies for you today!`;
  });
}

const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];
console.log(generateMessages(namesAndDiscounts));