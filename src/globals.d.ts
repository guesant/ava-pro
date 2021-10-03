import { Browser } from "webextension-polyfill";

declare global {
  declare module "*.css";
  const browser: Browser;
}
