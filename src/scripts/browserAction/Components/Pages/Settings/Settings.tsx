import List from "@mui/material/List";
import SettingsAbout from "./SettingsAbout";
import SettingsContribute from "./SettingsContribute";
import SettingsHeader from "./SettingsHeader";

const Settings = () => (
  <div className="page">
    <SettingsHeader />
    <div className="pageContent">
      <List>
        <SettingsAbout />
        <SettingsContribute />
      </List>
    </div>
  </div>
);

export default Settings;
