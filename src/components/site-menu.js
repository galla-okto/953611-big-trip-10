const createSiteMenuMarkup = (siteMenu, isActive) => {
  const {name} = siteMenu;

  return (`
    <a class="trip-tabs__btn ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${name}</a>
  `
  );
};

export const createSiteMenuTemplate = (siteMenu) => {
  const siteMenuMarkup = siteMenu.map((it, i) => createSiteMenuMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${siteMenuMarkup}
  </nav>`
  );
};
