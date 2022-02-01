export type IGetConversationsRequest = {
  userid: number

  type?: number | null

  limit?: number

  offset?: number

  favourites?: boolean | null

  mergeself?: boolean
} & Record<string, any>
