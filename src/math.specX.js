import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if given even number", () => {
    // Function under test (SUT)
    const result = isEven(2);
    expect(result).toEqual(true);
  });

  it("should return false if given odd number", () => {
    // Function under test (SUT)
    const result = isEven(3);
    expect(result).toEqual(false);
  });
});
