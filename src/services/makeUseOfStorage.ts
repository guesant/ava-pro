import equal from "deep-equal";
import { ILocalStore } from "../typings/ILocalStore";
import StorageService from "./StorageService";

export type ISlicer<T> = (state: ILocalStore) => T;

export type ICallback<T> =
  | (() => void)
  | ((state: T) => (void | Promise<void>) | (() => void));

export const makeUseOfStorage = <T>(
  slicer: ISlicer<T>,
  callback: ICallback<T>
) => {
  let prevState: T | null = null;

  const handleStorageChange = async (_changes: any, area: any) => {
    if (area === "local") {
      const storageData = await StorageService.data;
      const state = await slicer(storageData);

      if (!equal(state, prevState, { strict: true })) {
        prevState = state;
      }

      await callback(state);
    }
  };

  browser.storage.onChanged.addListener(handleStorageChange);

  return () => {
    browser.storage.onChanged.removeListener(handleStorageChange);
  };
};
