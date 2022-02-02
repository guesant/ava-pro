import { checkCurrentPage } from "./check-current-page"

window.addEventListener("popstate", () => void checkCurrentPage())

void checkCurrentPage()
