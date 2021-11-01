import * as yup from "yup";
import {
  CoursesOrderBy,
  DetectedRoomResponse,
  IDetectedRoom,
  ISettings,
} from "../typings/ISettings";
import StorageService from "./StorageService";
import produce from "immer";
import StorageRoomsService from "./StorageRoomsService";

class StorageSettingsService {
  settingsSchema = yup
    .object()
    .shape({
      selectedRoom: yup.string().nullable().default(null),

      courses: yup
        .object()
        .shape({
          orderBy: yup
            .mixed()
            .oneOf([CoursesOrderBy.NAME, CoursesOrderBy.LAST_VISIT])
            .default(CoursesOrderBy.NAME),
        })
        .default(() => ({})),

      detectedRooms: yup
        .array()
        .of(
          yup.object().shape({
            url: yup.string(),
            name: yup.string(),
            response: yup.number().default(DetectedRoomResponse.NONE),
          })
        )
        .transform(function (value: IDetectedRoom[]) {
          return this.isType(value)
            ? value.filter(
                (detectedRoom, idx, arr) =>
                  arr.findIndex((i) => i.url === detectedRoom.url) === idx
              )
            : value;
        })
        .default(() => []),
    })
    .default(() => ({})) as yup.ObjectSchema<any, any>;

  get data() {
    return StorageService.getItem("settings", {} as ISettings).then(
      (data) => this.settingsSchema.cast({ ...data }) as ISettings
    );
  }

  setData = (settings: ISettings) => StorageService.setData({ settings });

  updateSettings = async (callback: (settings: ISettings) => void) => {
    const currentSettings = await this.data;
    await this.setData(produce(currentSettings, callback));
  };

  setSelectedRoomResponse = async (
    detectedRoomUrl: IDetectedRoom["url"],
    response: DetectedRoomResponse
  ) => {
    await this.updateSettings((settings) => {
      const settingsDetectedRoom = settings.detectedRooms.find(
        (i) => i.url === detectedRoomUrl
      );
      if (settingsDetectedRoom) {
        settingsDetectedRoom.response = response;
      }
    });
  };

  handleDetectedRoomAcceptRequest = async ({ url, name }: IDetectedRoom) => {
    await this.setSelectedRoomResponse(url, DetectedRoomResponse.ACCEPTED);
    await StorageRoomsService.add({ url, name });
  };
}

export default new StorageSettingsService();
