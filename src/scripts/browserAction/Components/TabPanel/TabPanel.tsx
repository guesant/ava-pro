const TabPanel: React.FC<{ value: number; index: number }> = ({
  children,
  value,
  index,
  ...other
}) => (
  <div role="tabpanel" hidden={value !== index} {...other}>
    {value === index && children}
  </div>
);

export default TabPanel;
