export const extractSessKeyFromPage = (pageContent: string): string | null => {
  const [, sesskey = null] = pageContent.match(/"sesskey":"([^"]+)"/) || []
  return sesskey
}
