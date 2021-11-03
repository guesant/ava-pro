import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import React from "react";

type ISettingsLicensesListItemProps = {
  projectName: string;
  license: string;
  publisher: string;
  homepage: string;
};

const SettingsLicensesListItem: React.FC<ISettingsLicensesListItemProps> = ({
  projectName,
  license,
  homepage,
  publisher,
}) => (
  <>
    <ListItem button>
      <ListItemText
        primary={projectName}
        secondary={
          <>
            <span>License: {license}</span>
            <br />
            <span>Author: {publisher}</span>
            <br />
            <span>Homepage: {homepage}</span>
          </>
        }
      />
    </ListItem>
    <Divider />
  </>
);

export default SettingsLicensesListItem;
