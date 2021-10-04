import { useEffect } from "react";
import { useQuery } from "react-query";

export const useStorage = <T>(
  keys: string[],
  extractData: () => T | Promise<T>,
  defaultValue: T
) => {
  const { data, refetch, ...rest } = useQuery(keys, extractData);

  useEffect(() => {
    browser.storage.onChanged.addListener(refetch);
    return () => {
      browser.storage.onChanged.removeListener(refetch);
    };
  }, [refetch]);

  return { data: data || defaultValue, ...rest };
};
