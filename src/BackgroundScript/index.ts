import { setupEventListeners } from "./Events/setupEventListeners";
import { setupFetchChatsUpdates } from "./FetchChatsUpdates/setupFetchChatsUpdates";

const startBackgroundScript = () => {
  setupEventListeners();
  setupFetchChatsUpdates();
};

startBackgroundScript();
