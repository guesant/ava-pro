const INPUT_LOGIN_TOKEN_REGEX = /<input( [^>]*)? name="logintoken"( [^>]*)?\/?>/

const INPUT_LOGIN_TOKEN_VALUE_REGEX = /value="([^"]*)"/

export const extractLoginTokenFromPage = (pageContent: string) => {
  const [inputLoginToken = ""] =
    pageContent.match(INPUT_LOGIN_TOKEN_REGEX) ?? []

  const [, loginToken = ""] =
    inputLoginToken.match(INPUT_LOGIN_TOKEN_VALUE_REGEX) ?? []

  return loginToken
}
