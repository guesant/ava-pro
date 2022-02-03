import {
  IComposableRoute,
  IParams,
  IParamsDeclaration,
  makeComposableRoute
} from "@ava-pro/shared/lib/features/route"
import { PropsWithChildren, useCallback } from "react"
import { NavigateOptions, useNavigate, useParams } from "react-router"
import { Link, LinkProps } from "react-router-dom"

export const appRoutes = {
  get root() {
    return makeComposableRoute("/")
  },

  get rooms() {
    return this.root.compose("rooms")
  },

  get detectedRooms() {
    return this.rooms.compose("/detected")
  },

  get addRoom() {
    return this.rooms.compose("/add")
  },

  get viewRoom() {
    return this.rooms.compose<"id">("/:id")
  },

  get viewRoomCourses() {
    return this.viewRoom.compose("/courses")
  },

  get viewRoomConversations() {
    return this.viewRoom.compose("/conversations")
  },

  get viewRoomConversation() {
    return this.viewRoomConversations.compose<"conversationId">(
      "/:conversationId"
    )
  },

  get viewRoomChat() {
    return this.viewRoom.compose<"userId">("/chat/:userId")
  },

  get viewRoomSearch() {
    return this.viewRoom.compose("/search")
  },

  get viewRoomSearchCourses() {
    return this.viewRoomSearch.compose("/courses")
  },

  get viewRoomSearchConversations() {
    return this.viewRoomSearch.compose("/conversations")
  },

  get viewRoomCredentials() {
    return this.viewRoom.compose("/credentials")
  },

  get settings() {
    return this.root.compose("settings")
  },

  get settingsDataExport() {
    return this.settings.compose("/data/export")
  },

  get settingsDataImport() {
    return this.settings.compose("/data/import")
  }
}

export const useRenderAppRoute = () => {
  const currentParams = useParams()

  return useCallback(
    <ParamsDeclaration extends IParamsDeclaration>(
      route: IComposableRoute<ParamsDeclaration>,
      params?: Partial<IParams<ParamsDeclaration>>
    ) => route({ ...currentParams, ...params }),
    [currentParams]
  )
}

export const useNavigateAppRoute = () => {
  const navigate = useNavigate()
  const renderAppRoute = useRenderAppRoute()

  return useCallback(
    <ParamsDeclaration extends IParamsDeclaration>(
      route: IComposableRoute<ParamsDeclaration>,
      params?: Partial<IParams<ParamsDeclaration>>,
      options?: NavigateOptions
    ) => navigate(renderAppRoute(route, params), options),
    [renderAppRoute, navigate]
  )
}

type IAppRouteLinkProps<ParamsDeclaration extends IParamsDeclaration> = {
  route: IComposableRoute<ParamsDeclaration>
  params?: Partial<IParams<ParamsDeclaration>>
} & Omit<LinkProps, "to">

export const AppRouteLink = <ParamsDeclaration extends IParamsDeclaration>({
  route,
  params,
  children,
  ...props
}: PropsWithChildren<IAppRouteLinkProps<ParamsDeclaration>>) => {
  const renderAppRoute = useRenderAppRoute()

  return (
    <Link {...props} to={renderAppRoute(route, params)}>
      {children}
    </Link>
  )
}
