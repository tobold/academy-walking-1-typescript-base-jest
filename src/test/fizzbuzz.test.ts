import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("it returns the number as a string", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("it returns the number as a string", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
  it("returns Fizz for multiples of three", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });
  it("returns Buzz for multiples of five", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
});
