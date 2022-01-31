export const extractUserIdFromPage = (pageContent: string): number | null => {
  const [, userid = null] = pageContent.match(/data-userid="([\d]+)"/) || []
  return userid ? +userid : null
}
