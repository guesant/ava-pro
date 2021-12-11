const identifier = "ava-pro"

export const info = (...args: any[]) => {
  console.info(`[${identifier}::info]`, ...args)
}

export const debug = (...args: any[]) => {
  console.info(`[${identifier}::debug]`, ...args)
}
