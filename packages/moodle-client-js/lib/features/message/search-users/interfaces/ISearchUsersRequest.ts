export type ISearchUsersRequest = {
  limitfrom?: number
  limitnum?: number
  search: string
  userid: string | number
} & Record<string, any>
