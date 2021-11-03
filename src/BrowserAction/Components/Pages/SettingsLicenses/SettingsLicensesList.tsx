import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import SettingsLicensesListItem from "./SettingsLicensesListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { useLicenses } from "../../../Hooks/useLicenses";

const SettingsLicensesList = () => {
  const licenses = useLicenses();
  return (
    <List>
      <ListSubheader>
        <Box sx={{ py: 2 }}>
          <Typography>
            Sem esses outros projetos, esta extensão não seria possível.
          </Typography>
        </Box>
      </ListSubheader>
      {Object.entries(licenses).map(
        ([projectName, { publisher, licenses, url, repository }]) => (
          <SettingsLicensesListItem
            key={projectName}
            license={licenses}
            publisher={publisher}
            projectName={projectName}
            homepage={url ?? repository}
          />
        )
      )}
    </List>
  );
};

export default SettingsLicensesList;
