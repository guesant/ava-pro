export const checkIsMoodleInstanceFromDocument = (document: Document) => {
  const metaKeywords = document.querySelector('meta[name="keywords"]')

  const keywords =
    metaKeywords?.attributes.getNamedItem("content")?.value.split(",") || []

  return keywords.includes("moodle")
}
