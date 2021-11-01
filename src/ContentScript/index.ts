import { checkCurrentPage } from "./CheckCurrentPage/checkCurrentPage";

const startContentScript = () => {
  window.addEventListener("popstate", () => checkCurrentPage());
  checkCurrentPage();
};

startContentScript();
