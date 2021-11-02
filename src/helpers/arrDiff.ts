import { containsDeep } from "./containsDeep";

export const arrDiff = <T extends any>(prevArr: T[], nextArr: T[]) => {
  const added = nextArr.filter((item) => !containsDeep(prevArr, item));
  const removed = prevArr.filter((item) => !containsDeep(nextArr, item));

  return { added, removed };
};
