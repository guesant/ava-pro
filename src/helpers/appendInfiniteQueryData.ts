import { produce } from "immer";
import chunk from "lodash/chunk";
import isNumber from "lodash/isNumber";

export type InfiniteData<T, C = number | undefined> = {
  pages: InfiniteQueryPage<T>[];
  pageParams: C[];
};

export type InfiniteQueryPage<T, C = number | undefined> = {
  data: T[];
  nextCursor?: C;
};

export const appendInfiniteQueryData = <T extends any>(
  query: InfiniteData<T>,
  newData: T[],
  dataPerQuery: number
) =>
  produce(query, (draft) => {
    const prevData = Array.from(
      draft.pages.map(({ data }) => data).flat(1)
    ) as T[];

    const updatedData = ([] as T[]).concat(newData, prevData);

    const prevDataChunksCount = Math.ceil(prevData.length / dataPerQuery);

    const isPrevDataLastPageFull = prevData.length % dataPerQuery === 0;
    const isUpdatedDataLastPageFull = updatedData.length % dataPerQuery === 0;

    const hasNewIncompleteChunk =
      isPrevDataLastPageFull && !isUpdatedDataLastPageFull;

    if (hasNewIncompleteChunk) {
      const nextCursor = draft.pages[draft.pages.length - 1]?.nextCursor;
      if (draft.pageParams.length === 0) {
        draft.pageParams = [undefined];
      } else {
        draft.pageParams = [
          ...draft.pageParams,
          nextCursor ?? prevDataChunksCount * dataPerQuery,
        ];
      }
    }

    const getNextCursor = (pageIdx: number): undefined | number => {
      const param = draft.pageParams[pageIdx + 1];

      if (
        hasNewIncompleteChunk &&
        pageIdx === draft.pageParams.length - 1 &&
        draft.pages[draft.pages.length - 1]?.nextCursor !== undefined
      ) {
        const prevParam = getNextCursor(pageIdx - 1);
        return (
          (isNumber(prevParam) ? prevParam! : 0) +
          (updatedData.length - prevData.length)
        );
      }

      return param;
    };

    const updatedPages: InfiniteQueryPage<T>[] = chunk(
      updatedData,
      dataPerQuery
    ).map((data, idx) => {
      const nextCursor = getNextCursor(idx);

      return {
        data: data as T[],
        ...(nextCursor !== undefined ? { nextCursor } : {}),
      };
    });

    draft.pages = updatedPages as any;
  });
