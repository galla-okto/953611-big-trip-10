const siteMenuNames = [`table`, `stats`];

const generateSiteMenu = () => {
  return siteMenuNames.map((it) => {
    return {name: it};
  });
};

export {generateSiteMenu};
