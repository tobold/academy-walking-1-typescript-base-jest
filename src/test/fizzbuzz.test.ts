import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("it returns the number as a string", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("it returns the number as a string", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
  it.each`
    a
    ${6}
    ${3}
    ${9}
  `("should return Buzz when $a is used", ({ a }) => {
    expect(fizzbuzz(a)).toEqual("Fizz");
  });
  it.each`
    a
    ${5}
    ${10}
    ${20}
  `("should return Buzz when $a is used", ({ a }) => {
    expect(fizzbuzz(a)).toEqual("Buzz");
  });
  it("it returns FizzBuzz when 15 is used", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});
