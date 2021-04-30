function isDivisibleBy(number: number, divider: number) {
  return number % divider === 0;
}

export function fizzbuzz(number: number) {
  if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
    return "FizzBuzz";
  }
  if (isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  if (isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  return number.toString();
}
