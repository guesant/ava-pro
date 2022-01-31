export const extractInstanceHomeFromDocument = (document: Document) => {
  const homeAnchor = document.querySelector<HTMLAnchorElement>(
    "#nav-drawer a[data-key='home'], .homelink a"
  )
  return homeAnchor?.href
}
