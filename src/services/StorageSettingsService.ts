import * as yup from "yup";
import { ISettings } from "../typings/ISettings";
import StorageService from "./StorageService";
import produce from "immer";

class StorageSettingsService {
  settingsSchema = yup
    .object()
    .shape({})
    .default(() => ({})) as yup.ObjectSchema<any, any>;

  get data() {
    return StorageService.getItem("settings", {} as ISettings).then(
      (data) => this.settingsSchema.cast(data ?? {}) as ISettings
    );
  }

  setData = (settings: ISettings) => StorageService.setData({ settings });

  updateSettings = async (callback: (settings: ISettings) => void) => {
    const currentSettings = await this.data;
    await this.setData(produce(currentSettings, callback));
  };
}

export default new StorageSettingsService();