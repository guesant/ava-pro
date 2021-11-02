import { FetchChatsUpdates } from "./FetchChatsUpdates";

export const setupFetchChatsUpdates = () => {
  new FetchChatsUpdates().start();
};
