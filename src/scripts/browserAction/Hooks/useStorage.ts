import { useCallback, useEffect, useState } from "react";

export const useStorage = <T>(
  extractData: () => T | Promise<T>,
  defaultValue: T
) => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [data, setData] = useState(defaultValue);

  const handleStorageChange = useCallback(async () => {
    setIsFetchingData(true);

    try {
      const data = await Promise.resolve(extractData());
      setData(data);
    } catch (error) {} // eslint-disable-line no-empty

    setIsFetchingData(false);
  }, [extractData]);

  useEffect(() => {
    handleStorageChange();

    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [handleStorageChange]);

  return { data, isFetchingData };
};
