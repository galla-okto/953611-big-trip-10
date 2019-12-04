const createSiteMenuMarkup = (siteMenu, isActive) => {
  const {name} = siteMenu;

  const active = isActive === 0 ? `trip-tabs__btn--active` : ``;

  return (`
    <a class="trip-tabs__btn ` + active + `" href="#">${name}</a>
  `);
};

export const createSiteMenuTemplate = (siteMenu) => {
  const siteMenuMarkup = siteMenu.map(createSiteMenuMarkup).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${siteMenuMarkup}
  </nav>`
  );
};
