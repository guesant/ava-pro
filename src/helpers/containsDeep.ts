import equal from "deep-equal";

export const containsDeep = <T>(arr: T[], target: T) =>
  arr.some((i) => equal(i, target, { strict: true }));
