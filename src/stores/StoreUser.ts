import { action, computed, configure, makeObservable, observable } from 'mobx';

import { EnumStateRequest } from '../Enums/EnumStateRequest.js';
import { IUser } from '../Interfaces/IUser.js';

class StoreUser {
  public users: IUser[] = [];

  public stateRequest: EnumStateRequest = EnumStateRequest.Idle;

  public get amountUsers() {
    return this.users.length;
  }

  private addUser(user: IUser): void {
    this.users.push(user);
  }

  public addUserBound(user: IUser): void {
    this.users.push(user);
  }

  // public async fetchUsersAsyncAwait() {
  //   runInAction(() => {
  //     this.stateRequest = EnumStateRequest.Pending;
  //   });

  //   try {
  //     const users: IUser[] = await new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve([
  //           { name: 'dan', age: 10 },
  //           { name: 'dan2', age: 11 },
  //         ]);
  //       }, 1000);
  //     });

  //     runInAction(() => {
  //       this.users.push(...users);
  //       this.stateRequest = EnumStateRequest.Success;
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.stateRequest = EnumStateRequest.Error;
  //     });
  //   }
  // }

  public async fetchUsersAsyncAwait() {
    this.stateRequest = EnumStateRequest.Pending;

    try {
      const users: IUser[] = await new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { name: 'dan', age: 10 },
            { name: 'dan2', age: 11 },
          ]);
        }, 1000);
      });

      this.users.push(...users);
      this.stateRequest = EnumStateRequest.Success;
    } catch (error) {
      this.stateRequest = EnumStateRequest.Error;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public fetchUsersPromise() {
    console.log('lol: ');
  }

  constructor() {
    // ts wont allow anotations on private fields
    // this is a workaround using generics
    makeObservable<StoreUser, 'addUser'>(this, {
      users: observable,
      stateRequest: observable,
      addUser: action,
      addUserBound: action.bound,
      amountUsers: computed,
      fetchUsersAsyncAwait: action,
    });
  }
}

export default new StoreUser();

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});
