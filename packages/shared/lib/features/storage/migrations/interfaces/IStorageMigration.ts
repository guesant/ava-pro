export interface IStorageMigration {
  id: number
  up: () => void | Promise<void>
}
