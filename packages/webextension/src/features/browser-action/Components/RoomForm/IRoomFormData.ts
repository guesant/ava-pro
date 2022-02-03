import { IRoom } from "@ava-pro/shared/lib/features/storage/schemas/rooms/room"

export type IRoomFormData = Pick<IRoom, "url" | "name">
