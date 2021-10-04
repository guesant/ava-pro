import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import { useContextSelector } from "use-context-selector";
import StorageSettingsService from "../../../../../services/StorageSettingsService";
import { CoursesOrderBy } from "../../../../../typings/ISettings";
import { SettingsContext } from "../../../Hooks/SettingsContext";

const orderOptions = [
  { value: CoursesOrderBy.NAME, text: "Nome" },
  { value: CoursesOrderBy.LAST_VISIT, text: "Último acesso" },
];

const setOrderBy = (orderBy: CoursesOrderBy) =>
  StorageSettingsService.updateSettings(
    (settings) => void (settings.courses.orderBy = orderBy)
  );

const ViewRoomHeaderOptionsOrderBy: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => {
  const orderBy = useContextSelector(
    SettingsContext,
    ({
      settings: {
        courses: { orderBy },
      },
    }) => orderBy
  );

  const handleSelectOrderBy = useCallback(
    (orderBy: CoursesOrderBy) => () => {
      setOrderBy(orderBy);
      handleClose();
    },
    [handleClose]
  );

  return (
    <>
      <ListSubheader>
        <Typography>Ordernar por:</Typography>
      </ListSubheader>
      <MenuList>
        {orderOptions.map(({ value, text }) => (
          <MenuItem
            dense
            key={value}
            selected={orderBy === value}
            onClick={handleSelectOrderBy(value)}
          >
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

const ViewRoomHeaderOptionsButton = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleOpenButtonClick = useCallback(
    (event: any) => setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );

  return (
    <>
      <IconButton onClick={handleOpenButtonClick} color="inherit">
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <ViewRoomHeaderOptionsOrderBy handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default ViewRoomHeaderOptionsButton;
