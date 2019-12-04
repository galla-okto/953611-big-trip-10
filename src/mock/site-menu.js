const siteMenuNames = [`table`, `stats`];

export const generateSiteMenu = () => {
  return siteMenuNames.map((it) => {
    return {name: it};
  });
};
