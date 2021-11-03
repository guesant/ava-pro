import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import StorageSettingsService from "../../../../services/StorageSettingsService";
import { CoursesOrderBy } from "../../../../typings/ISettings";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import classes from "./ViewRoomCoursesHeader.module.css";
import { ViewRoomGenericHeaderOptionsContext } from "../ViewRoomGenericHeader/ViewRoomGenericHeaderOptionsContext";

const orderByOptions = [
  { value: CoursesOrderBy.NAME, text: "Nome" },
  { value: CoursesOrderBy.LAST_VISIT, text: "Último acesso" },
];

const setOrderBy = (orderBy: CoursesOrderBy) =>
  StorageSettingsService.updateSettings(
    (settings) => void (settings.courses.orderBy = orderBy)
  );

const ViewRoomCoursesHeaderOptionsOrderBy = () => {
  const handleClose = useContextSelector(
    ViewRoomGenericHeaderOptionsContext,
    ({ handleClose }) => handleClose
  );

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
      <ListSubheader className={classes.listSubheader}>
        <Typography variant="caption">Ordenar cursos por:</Typography>
      </ListSubheader>
      <MenuList>
        {orderByOptions.map(({ value, text }) => (
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

export default ViewRoomCoursesHeaderOptionsOrderBy;