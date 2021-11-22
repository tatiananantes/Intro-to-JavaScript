// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.

const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(30));
console.log(fizzBuzz(50));