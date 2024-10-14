import { getRandomPoint } from '../mock/gen-point.js';

const POINT_COUNT = 4;


export default class RouteModel {
  #route = Array.from({length: POINT_COUNT}, getRandomPoint);

  get route() {
    return this.#route;
  }
}
