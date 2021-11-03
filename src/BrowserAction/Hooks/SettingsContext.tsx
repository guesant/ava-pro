import { useMemo } from "react";
import { createContext } from "use-context-selector";
import StorageSettingsService from "../../services/StorageSettingsService";
import { ISettings } from "../../typings/ISettings";
import { useStorage } from "./useStorage";

type ISettingsContext = {
  settings: ISettings;
};

export const SettingsContext = createContext({} as ISettingsContext);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const { data } = useStorage(
    ["storage.settings"],
    () => StorageSettingsService.data,
    {} as ISettings
  );

  const settings = useMemo(
    () => StorageSettingsService.settingsSchema.cast({ ...data }) as ISettings,
    [data]
  );

  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};
