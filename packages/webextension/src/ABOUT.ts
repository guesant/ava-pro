import browser from "webextension-polyfill"

export const ABOUT = {
  VERSION: browser.runtime.getManifest().version ?? "unknown",

  PROJECT_LICENSE: "AGLP-3.0",
  PROJECT_REPOSITORY: "https://github.com/guesant/ava-pro",

  AUTHOR_NAME: "Gabriel R. Antunes",
  AUTHOR_EMAIL: "gabrielrodantunes@gmail.com",
  AUTHOR_GITHUB: "https://github.com/guesant"
}
