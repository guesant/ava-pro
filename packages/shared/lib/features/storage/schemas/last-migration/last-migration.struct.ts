import { defaulted, nullable, number } from "superstruct"

export const LastMigrationStruct = defaulted(nullable(number()), () => null)
