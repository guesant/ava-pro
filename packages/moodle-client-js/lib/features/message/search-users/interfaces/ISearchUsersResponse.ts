import { ISearchUsersContactUserDto } from "./dtos/ISearchUsersContactUserDto"

export type ISearchUsersResponse = {
  contacts: ISearchUsersContactUserDto[]
  noncontacts: ISearchUsersContactUserDto[]
}
