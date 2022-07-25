import { observable, action } from 'mobx';

// import { User } from './interfaces/User.js';
// import { usersFromServer } from './users.js';

class Store {
  @observable
  public count = 0;

  @action
  public increment() {
    this.count += 1;
  }

  // constructor() {
  //   this._init();
  // }

  // @action
  // private async _init() {
  //   this.setUsers(
  //     await new Promise(resolve =>
  //       setTimeout(() => {
  //         console.log('usersFromServer: ', usersFromServer);
  //         resolve(usersFromServer);
  //       }, 1000)
  //     )
  //   );
  // }

  // @action
  // public setUsers(users: User[]) {
  //   this.users = users;
  // }

  // @action
  // public addUser(user: User) {
  //   this.users = [...this.users, user];
  // }
}

export const store = new Store();
