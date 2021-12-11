export const isUrl = (value: string) => {
  try {
    new URL(value)
    return true
  } catch (e) {
    return false
  }
}
