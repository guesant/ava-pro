export const isUrl = (value: string) => {
  try {
    // eslint-disable-next-line no-new
    new URL(value)
    return true
  } catch (e) {
    return false
  }
}
