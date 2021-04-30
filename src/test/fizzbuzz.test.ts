import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("it returns the number as a string", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("it returns the number as a string", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});
