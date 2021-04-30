import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("it returns the number as a string", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("it returns the number as a string", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
  it.each([3, 6, 9])("should return Buzz when %p is used", (number) => {
    expect(fizzbuzz(number)).toEqual("Fizz");
  });
  it.each([5, 10, 20])("should return Buzz when %p is used", (number) => {
    expect(fizzbuzz(number)).toEqual("Buzz");
  });
  it("it returns FizzBuzz when 15 is used", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });
});
