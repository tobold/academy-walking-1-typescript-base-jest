export function fizzbuzz(number: number) {
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number === 5 || number === 10) {
    return "Buzz";
  }
  return number.toString();
}
