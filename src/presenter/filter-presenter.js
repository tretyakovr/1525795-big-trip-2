import Observable from '../framework/observable.js';
import FilterView from '../view/filter-view.js';
import { DEFAULT_FILTER_TYPE } from '../utils/common.js';

import { render, replace, remove } from '../framework/render.js';


export default class FilterPresenter extends Observable {
  #filterComponent = null;
  #filterContainer = null;
  #sortPresenter = null;
  #routeModel = null;
  #currentFilter = DEFAULT_FILTER_TYPE;


  constructor(filterContainer, sortPresenter, routeModel) {
    super();
    this.#filterContainer = filterContainer;
    this.#sortPresenter = sortPresenter;
    this.#routeModel = routeModel;
  }

  init() {
    this.refreshFilter();
  }

  get currentFilter() {
    return this.#currentFilter;
  }

  get filterComponent() {
    return this.#filterComponent;
  }

  setFilter(filter) {
    this.#currentFilter = filter;
    this._notify();
  }

  refreshFilter = () => {
    const currentFilterComponent = this.#filterComponent;
    this.#filterComponent = new FilterView(this.#currentFilter, this.#changeFilterHandler, this.#routeModel);

    if (currentFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer, 'afterbegin');
      return;
    }

    replace(this.#filterComponent, currentFilterComponent);
    remove(currentFilterComponent);
  };


  resetFilterType = () => {
    this.#changeFilterHandler(DEFAULT_FILTER_TYPE);
    this.refreshFilter();
  };

  #changeFilterHandler = (newFilter) => {
    this.#sortPresenter.resetSortType();
    this.setFilter(newFilter);
  };

  removeComponent = () => {
    remove(this.#filterComponent);
    this.#filterComponent = null;
  };
}
