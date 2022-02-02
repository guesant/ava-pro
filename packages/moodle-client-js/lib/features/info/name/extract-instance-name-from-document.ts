export const extractInstanceNameFromDocument = (document: Document) => {
  const siteName = document.querySelector<HTMLSpanElement>(".site-name")
  return siteName?.textContent ?? document.title ?? document.location.href
}
