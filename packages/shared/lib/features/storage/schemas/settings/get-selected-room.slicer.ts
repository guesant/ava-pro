import { IExtensionStorageSlicer } from "../../interfaces"
import { IStorage } from "../interfaces"

export const getSelectedRoom: IExtensionStorageSlicer<
  IStorage["settings"]["selectedRoom"]
> = (state) => state.settings.selectedRoom
