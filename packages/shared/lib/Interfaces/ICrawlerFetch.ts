export type ICrawlerFetchOptions = {
  url: string
  options?: RequestInit
}

export type ICrawlerFetch = (
  crawlerFetchOptions: ICrawlerFetchOptions
) => Promise<Response>
