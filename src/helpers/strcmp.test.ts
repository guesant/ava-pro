import { strcmp } from "./strcmp";

describe("strcmp", () => {
  it("deve retornar -1", () => {
    expect(strcmp("a", "b")).toBe(-1);
  });

  it("deve retornar 1", () => {
    expect(strcmp("b", "a")).toBe(1);
  });

  it("deve retornar 0", () => {
    expect(strcmp("c", "c")).toBe(0);
    expect(strcmp("à", "à")).toBe(0);
  });
});
