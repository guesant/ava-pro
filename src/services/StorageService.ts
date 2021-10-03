import { ILocalStore } from "../typings/ILocalStore";

class StorageService {
  get data() {
    return browser.storage.local.get() as Promise<ILocalStore>;
  }

  getItem = async <T>(key: string, defaultValue: T): Promise<T> => {
    const data = await browser.storage.local.get(key);
    return data[key] ?? defaultValue;
  };

  getItems = async <T>(keys: string[], defaultValue?: T) => {
    const data = await browser.storage.local.get(keys);
    return { ...defaultValue, ...data } as T;
  };

  setData = (data: Partial<ILocalStore>) => browser.storage.local.set(data);
}

export default new StorageService();
