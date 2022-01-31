export type ISearchUsersRequest = {
  limitfrom: number
  limitnum: number
  search: string
  userid: string
} & Record<string, any>
