export const extractLoginStateFromPage = (data: string) => {
  const [body = ""] = data.match(/<body[^>]*>/g) || []
  const isLoggedIn = !body.includes("notloggedin")
  return isLoggedIn
}
