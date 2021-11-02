import { arrDiff } from "./arrDiff";

describe("arrDiff", () => {
  it("deve indicar os elementos que foram removidos", () => {
    expect(arrDiff([{ id: 1 }, { id: 2 }], [{ id: 2 }])).toStrictEqual({
      added: [],
      removed: [{ id: 1 }],
    });
  });

  it("deve indicar os elementos que foram adicionados", () => {
    expect(
      arrDiff([{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 1 }, { id: 2 }])
    ).toStrictEqual({
      added: [{ id: 3 }],
      removed: [],
    });
  });

  it("deve indicar os elementos que foram adicionados e removidos", () => {
    expect(
      arrDiff([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 3 }])
    ).toStrictEqual({
      added: [{ id: 3 }],
      removed: [{ id: 2 }],
    });
  });
});
