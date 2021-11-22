// const addToBatch = (array, number) => {
//   if (array.length <= 5) {
//     return array.concat(number);
//   }
//   return array;
// };

// console.log(addToBatch([1,2,3,4], 5))
// console.log(addToBatch([], 8))
// console.log(addToBatch([1, 2, 3, 4, 5, 6], 7))


const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
     return false;
  }
};

console.log(checkLength('1234567890'));
console.log(checkLength('12345678909876'));


const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
}

const phoneNumbers = [
  '1763687364',
  '4763687363',
  '7867867862', 
  'aaaaaaaabbbbbbbcccccdddddddd'
];

console.log(filterLongNumbers(phoneNumbers));
console.log(filterLongNumbers(['4763687363', '7867867862']));
console.log(filterLongNumbers([]));