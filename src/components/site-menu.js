import {createElement} from '../utils.js';

const createSiteMenuMarkup = (siteMenu, isActive) => {
  const {name} = siteMenu;

  const active = isActive === 0 ? `trip-tabs__btn--active` : ``;

  return (`<a class="trip-tabs__btn ` + active + `" href="#">${name}</a>
  `);
};

const createSiteMenuTemplate = (siteMenu) => {
  const siteMenuMarkup = siteMenu.map(createSiteMenuMarkup).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${siteMenuMarkup}
  </nav>`
  );
};

export default class SiteMenu {
  constructor(siteMenu) {
    this._siteMenu = siteMenu;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._siteMenu);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
