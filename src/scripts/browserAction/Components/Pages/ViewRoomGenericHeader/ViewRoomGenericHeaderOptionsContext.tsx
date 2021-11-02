import { createContext } from "use-context-selector";
import React, { useCallback, useState } from "react";

type IViewRoomGenericHeaderOptionsContext = {
  isOpen: boolean;
  anchorEl: Element | null;

  handleClose: () => void;
  handleOpenClick: (event: any) => void;
};

export const ViewRoomGenericHeaderOptionsContext = createContext(
  {} as IViewRoomGenericHeaderOptionsContext
);

export const ViewRoomGenericHeaderOptionsContextProvider: React.FC = ({
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleOpenClick = useCallback(
    (event: any) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  const isOpen = Boolean(anchorEl);

  return (
    <ViewRoomGenericHeaderOptionsContext.Provider
      value={{ isOpen, anchorEl, handleClose, handleOpenClick }}
    >
      {children}
    </ViewRoomGenericHeaderOptionsContext.Provider>
  );
};
