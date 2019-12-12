import AbstractComponent from './abstract-component.js';

const createSiteMenuMarkup = (siteMenu, isActive) => {
  const {name} = siteMenu;

  const active = isActive === 0 ? `trip-tabs__btn--active` : ``;

  return (`<a class="trip-tabs__btn ` + active + `" href="#">${name}</a>
  `);
};

const createSiteMenuTemplate = (siteMenu) => {
  const siteMenuMarkup = siteMenu.map(createSiteMenuMarkup).join(`\n`);

  return (`<nav class="trip-controls__trip-tabs  trip-tabs">
    ${siteMenuMarkup}
  </nav>`
  );
};

export default class SiteMenu extends AbstractComponent {
  constructor(siteMenu) {
    super();

    this._siteMenu = siteMenu;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._siteMenu);
  }
}
