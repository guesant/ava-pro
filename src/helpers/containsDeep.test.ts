import { containsDeep } from "./containsDeep";

describe("containsDeep", () => {
  it("deve retornar true", () => {
    expect(containsDeep([{ name: "guesant" }], { name: "guesant" })).toBe(true);
  });

  it("deve retornar false", () => {
    expect(containsDeep([{ name: "not guesant" }], { name: "guesant" })).toBe(
      false
    );
  });
});
