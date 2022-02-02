export const extractLoginStateFromPage = (data: string) => {
  // const [body = ""] = data.match(/<body[^>]*>/g) || []
  // return !body.includes("notloggedin")

  // eslint-disable-next-line quotes
  return !data.includes('id="login"')
}
