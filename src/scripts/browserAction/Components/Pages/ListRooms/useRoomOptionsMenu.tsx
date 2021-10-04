import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useCallback, useState } from "react";
import StorageRoomsService from "../../../../../services/StorageRoomsService";
import { IMenuData } from "./ListRoomsList";

export type IHandleOpenMenuClick = ReturnType<
  typeof useRoomOptionsMenu
>["handleOpenMenuClick"];

export const useRoomOptionsMenu = () => {
  const [menuData, setMenuData] = useState<IMenuData | null>(null);
  const handleClose = useCallback(() => setMenuData(null), []);

  const handleOpenMenuClick = useCallback(
    (roomUrl: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      setMenuData({ url: roomUrl, anchorEl: e.currentTarget }),
    []
  );

  const menu = (
    <Menu
      onClose={handleClose}
      open={Boolean(menuData)}
      anchorEl={menuData?.anchorEl}
    >
      <MenuList>
        <MenuItem
          dense
          onClick={() => {
            if (!menuData) return;
            StorageRoomsService.removeOne(menuData.url);
            handleClose();
          }}
        >
          Remover Ambiente
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return { menu, setMenuData, handleOpenMenuClick };
};
