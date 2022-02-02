export const hasOwnProperty = (obj: any, prop: string) =>
  Object.hasOwnProperty.call(obj ?? {}, prop)
