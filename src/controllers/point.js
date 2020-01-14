import CardComponent from '../components/card.js';
import CardEditComponent from '../components/card-edit.js';
import {render, replace, remove, RenderPosition} from '../utils/render.js';

export const Mode = {
  ADDING: `adding`,
  DEFAULT: `default`,
  EDIT: `edit`,
};

export const EmptyPoint = {
  id: null,
  type: null,
  town: null,
  photos: [],
  description: ``,
  date: null,
  timeIn: null,
  timeOut: null,
  price: null,
  option: [],
  isFavorite: false
};

export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;

    this._mode = Mode.DEFAULT;

    this._cardComponent = null;
    this._cardEditComponent = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(card, mode) {
    const oldCardComponent = this._cardComponent;
    const oldCardEditComponent = this._cardEditComponent;
    this._mode = mode;

    this._cardComponent = new CardComponent(card);
    this._cardEditComponent = new CardEditComponent(card);

    this._cardComponent.setEditButtonClickHandler(() => {
      this._replaceCardToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._cardEditComponent.setFavoritesButtonClickHandler(() => {
      this._onDataChange(this, card, Object.assign({}, card, {
        isFavorite: !card.isFavorite,
      }));
    });

    this._cardEditComponent.setSubmitHandler((evt) => {
      evt.preventDefault();

      const formData = this._cardEditComponent.getData();
      this._onDataChange(this, card, Object.assign({}, formData, {}));
    });

    this._cardEditComponent.setDeleteButtonClickHandler(() =>
      this._onDataChange(this, card, null));

    switch (mode) {
      case Mode.DEFAULT:
        if (oldCardEditComponent && oldCardComponent) {
          replace(this._cardComponent, oldCardComponent);
          replace(this._cardEditComponent, oldCardEditComponent);
        } else {
          render(this._container, this._cardComponent, RenderPosition.BEFOREEND);
        }
        break;
      case Mode.ADDING:
        if (oldCardEditComponent && oldCardComponent) {
          remove(oldCardComponent);
          remove(oldCardEditComponent);
        }
        document.addEventListener(`keydown`, this._onEscKeyDown);
        render(this._container, this._cardEditComponent, RenderPosition.AFTERBEGIN);
        break;
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToCard();
    }
  }

  destroy() {
    remove(this._cardEditComponent);
    remove(this._cardComponent);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _replaceEditToCard() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);

    this._cardEditComponent.reset();

    if (document.contains(this._cardEditComponent.getElement())) {
      replace(this._cardComponent, this._cardEditComponent);
    }

    this._mode = Mode.DEFAULT;
  }

  _replaceCardToEdit() {
    this._onViewChange();

    replace(this._cardEditComponent, this._cardComponent);
    this._mode = Mode.EDIT;
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      if (this._mode === Mode.ADDING) {
        this._onDataChange(this, EmptyPoint, null);
      }
      this._replaceEditToCard();
    }
  }
}
