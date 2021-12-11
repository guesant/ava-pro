import normalizeUrl from "normalize-url"
import { ICrawlerFetch } from "./Interfaces/ICrawlerFetch"

export const makeCrawlerFetch = (baseUrl: string) => {
  const normalizedRoomURL = normalizeUrl(baseUrl, { removeTrailingSlash: true })

  const crawlerFetch: ICrawlerFetch = async ({ url, options }) => {
    const targetUrl = normalizedRoomURL + url

    const response = await fetch(targetUrl, {
      ...options,
      mode: "cors",
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error("Response not ok")
    }

    return response
  }

  return crawlerFetch
}
