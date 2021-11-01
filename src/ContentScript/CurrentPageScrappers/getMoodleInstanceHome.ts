export const getMoodleInstanceHome = (fallback = document.location.href) => {
  const homeLinkAnchor =
    document.querySelector<HTMLAnchorElement>(".homelink a");
  return homeLinkAnchor?.href ?? fallback;
};
