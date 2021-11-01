export const isMoodleInstance = () => {
  const keywords = document.querySelector('meta[name="keywords"]');
  return keywords?.attributes
    .getNamedItem("content")
    ?.value.split(",")
    .includes("moodle");
};
