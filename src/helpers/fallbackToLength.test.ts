import { fallbackToLength } from "./fallbackToLength";

describe("fallbackToLength", () => {
  it("deve retornar o índice", () => {
    expect(fallbackToLength(0, 20)).toBe(0);
    expect(fallbackToLength(10, 20)).toBe(10);
  });
  it("deve retornar o length", () => {
    expect(fallbackToLength(-1, 0)).toBe(0);
    expect(fallbackToLength(-1, 20)).toBe(20);
  });
});
