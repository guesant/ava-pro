import {
  appendInfiniteQueryData,
  InfiniteData,
} from "./appendInfiniteQueryData";

const DATA_PER_QUERY = 5;

describe("appendInfiniteQueryData", () => {
  it("deve adicionar os dados no último chunk, se couber", () => {
    const query: InfiniteData<number> = {
      pages: [
        {
          data: [1, 2, 3, 4, 5],
          nextCursor: 5,
        },
        {
          data: [6, 7, 8, 9],
        },
      ],
      pageParams: [undefined, 5],
    };

    const expectedQuery: InfiniteData<number> = {
      pages: [
        {
          data: [0, 1, 2, 3, 4],
          nextCursor: 5,
        },
        {
          data: [5, 6, 7, 8, 9],
        },
      ],
      pageParams: [undefined, 5],
    };

    expect(appendInfiniteQueryData(query, [0], DATA_PER_QUERY)).toStrictEqual(
      expectedQuery
    );
  });

  it("deve adicionar os dados em um novo chunk", () => {
    const query: InfiniteData<number> = {
      pages: [
        {
          data: [1, 2, 3, 4, 5],
          nextCursor: 5,
        },
        {
          data: [6, 7, 8, 9, 10],
          nextCursor: 10,
        },
      ],
      pageParams: [undefined, 5],
    };

    const expectedQuery: InfiniteData<number> = {
      pages: [
        {
          data: [0, 1, 2, 3, 4],
          nextCursor: 5,
        },
        {
          data: [5, 6, 7, 8, 9],
          nextCursor: 10,
        },
        {
          data: [10],
          nextCursor: 11,
        },
      ],
      pageParams: [undefined, 5, 10],
    };

    expect(appendInfiniteQueryData(query, [0], DATA_PER_QUERY)).toStrictEqual(
      expectedQuery
    );
  });

  it("deve adicionar os dados em um novo chunk mesmo com o pageParams só tendo o valor undefined", () => {
    const query: InfiniteData<number> = {
      pages: [
        {
          data: [1, 2, 3, 4, 5],
          nextCursor: 5,
        },
      ],
      pageParams: [undefined],
    };

    const expectedQuery: InfiniteData<number> = {
      pages: [
        {
          data: [0, 1, 2, 3, 4],
          nextCursor: 5,
        },
        {
          data: [5],
          nextCursor: 6,
        },
      ],
      pageParams: [undefined, 5],
    };

    expect(appendInfiniteQueryData(query, [0], DATA_PER_QUERY)).toStrictEqual(
      expectedQuery
    );
  });

  it("deve adicionar os dados em um novo chunk em um query com nenhum page", () => {
    const query: InfiniteData<number> = {
      pages: [],
      pageParams: [],
    };

    const expectedQuery: InfiniteData<number> = {
      pages: [
        {
          data: [0],
        },
      ],
      pageParams: [undefined],
    };

    expect(appendInfiniteQueryData(query, [0], DATA_PER_QUERY)).toStrictEqual(
      expectedQuery
    );
  });

  it("deve adicionar os dados em um novo chunk em um query com a última page sem nextCursor", () => {
    const query: InfiniteData<number> = {
      pages: [
        {
          data: [1, 2, 3, 4, 5],
        },
      ],
      pageParams: [undefined],
    };

    const expectedQuery: InfiniteData<number> = {
      pages: [
        {
          data: [0, 1, 2, 3, 4],
          nextCursor: 5,
        },
        {
          data: [5],
        },
      ],
      pageParams: [undefined, 5],
    };

    expect(appendInfiniteQueryData(query, [0], DATA_PER_QUERY)).toStrictEqual(
      expectedQuery
    );
  });
});
