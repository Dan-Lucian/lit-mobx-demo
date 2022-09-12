import { action, makeObservable, observable } from 'mobx';

export default class StoreRouter {
  public pathCurrent: string = '/';

  public setPathCurrent(route: string): void {
    this.pathCurrent = route;
  }

  constructor() {
    makeObservable(this, {
      pathCurrent: observable,
      setPathCurrent: action,
    });
  }
}
