import { Ruty } from "ruty"

const { route } = Ruty.configure()

export type IParamsDeclaration = string

export type IParams<ParamsDeclaration extends IParamsDeclaration> = Record<
  ParamsDeclaration,
  any
>

export type IComposableRoute<BaseParams extends IParamsDeclaration> = {
  path: string

  (params?: Partial<IParams<BaseParams>>): string

  compose: <Params extends IParamsDeclaration>(
    path: string
  ) => IComposableRoute<BaseParams | Params>
}

export const makeComposableRoute = <BaseParams extends IParamsDeclaration>(
  basePath: string
) => {
  const build = (params?: Partial<IParams<BaseParams>>) => {
    return route(basePath).build()(params)
  }

  const compose = <Params extends IParamsDeclaration>(path?: string) => {
    return makeComposableRoute<BaseParams & Params>(basePath + path)
  }

  const composableRoute = build as unknown as IComposableRoute<BaseParams>

  Object.assign(composableRoute, { path: basePath, compose })

  return composableRoute
}
