import { action, makeObservable, observable } from 'mobx';

class Store {
  public count = 0;

  public increment() {
    this.count += 1;
  }

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
    });
  }
}

export const store = new Store();
