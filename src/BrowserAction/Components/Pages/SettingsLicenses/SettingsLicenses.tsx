import SettingsLicensesHeader from "./SettingsLicensesHeader";
import SettingsLicensesList from "./SettingsLicensesList";

const SettingsLicenses = () => (
  <div className="page">
    <SettingsLicensesHeader />
    <div className="pageContent">
      <SettingsLicensesList />
    </div>
  </div>
);

export default SettingsLicenses;
