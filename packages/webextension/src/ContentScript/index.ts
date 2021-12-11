import { checkCurrentPage } from "./CheckCurrentPage/CheckCurrentPage"

window.addEventListener("popstate", () => void checkCurrentPage())

void checkCurrentPage()
