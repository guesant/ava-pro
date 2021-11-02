import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import React from "react";
import { useContextSelector } from "use-context-selector";
import ViewRoomGenericHeaderOptionsCredentials from "./ViewRoomGenericHeaderOptionsCredentials";
import { ViewRoomGenericHeaderOptionsContext } from "./ViewRoomGenericHeaderOptionsContext";

export type IViewRoomGenericHeaderOptionsProps = {
  startContent?: React.ReactNode[];
  endContent?: React.ReactNode[];
};

const ViewRoomGenericHeaderOptions: React.FC<IViewRoomGenericHeaderOptionsProps> =
  ({ startContent = [], endContent = [] }) => {
    const anchorEl = useContextSelector(
      ViewRoomGenericHeaderOptionsContext,
      ({ anchorEl }) => anchorEl
    );

    const isOpen = useContextSelector(
      ViewRoomGenericHeaderOptionsContext,
      ({ isOpen }) => isOpen
    );

    const handleClose = useContextSelector(
      ViewRoomGenericHeaderOptionsContext,
      ({ handleClose }) => handleClose
    );

    const handleOpenClick = useContextSelector(
      ViewRoomGenericHeaderOptionsContext,
      ({ handleOpenClick }) => handleOpenClick
    );

    return (
      <>
        <IconButton onClick={handleOpenClick} color="inherit">
          <MoreVertIcon />
        </IconButton>
        <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
          {...startContent}
          <ViewRoomGenericHeaderOptionsCredentials />
          {...endContent}
        </Menu>
      </>
    );
  };

export default ViewRoomGenericHeaderOptions;
