import { selectOne } from "css-select"
import { Document, Element } from "domhandler"
import { parseDocument } from "htmlparser2"

export const extractLoginTokenFromPage = (pageContent: string) => {
  const dom = parseDocument(pageContent, {})

  const loginToken = selectOne<Document, Element>(
    // eslint-disable-next-line quotes
    'input[name="logintoken"]',
    dom
  )!

  return loginToken.attribs.value as string
}
