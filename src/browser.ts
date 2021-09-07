import { Browser } from "webextension-polyfill";

const browser = (globalThis as any).browser as Browser;

export default browser;
