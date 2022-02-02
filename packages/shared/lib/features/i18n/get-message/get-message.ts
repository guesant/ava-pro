import browser from "webextension-polyfill"

export const getMessage = (messageName: string, substitutions?: any) =>
  browser.i18n.getMessage(messageName, substitutions)
