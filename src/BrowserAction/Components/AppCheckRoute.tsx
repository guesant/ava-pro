import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useContextSelector } from "use-context-selector";
import { SettingsContext } from "../Hooks/SettingsContext";
import { routes } from "./Routes";

const AppCheckRoute: React.FC = ({ children }) => {
  const history = useHistory();

  const selectedRoom = useContextSelector(
    SettingsContext,
    ({ settings: { selectedRoom } }) => selectedRoom
  );

  useEffect(() => {
    if (selectedRoom) {
      history.push(routes.viewRoom({ id: encodeURIComponent(selectedRoom) }));
    } else {
      history.push(routes.listRooms());
    }
  }, [history, selectedRoom]);

  return <>{children}</>;
};

export default AppCheckRoute;
