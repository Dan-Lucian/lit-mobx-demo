/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { observable, action, makeObservable } from 'mobx';
import { MobxLitElement } from '@adobe/lit-mobx';

// create a mobx observable
class Counter {
  @observable
  public count = 0;

  @action
  public increment() {
    this.count++;
  }

  public constructor() {
    makeObservable(this);
  }
}

// create instance that can be shared across components
const counter = new Counter();

// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class AppRoot extends MobxReactionUpdate(LitElement)`
@customElement('app-root')
export class AppRoot extends MobxLitElement {
  private counter = counter;

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    return html`
      <p>Count is ${this.counter.count}</p>
      <button @click=${this.incrementCount}>Add</button>
    `;
  }

  private incrementCount() {
    this.counter.increment();
    console.log('increment counter');
  }
}

// /* eslint-disable wc/guard-super-call */
// import { html, css, LitElement } from 'lit';
// import { MobxLitElement } from '@adobe/lit-mobx';
// import { customElement } from 'lit/decorators.js';
// // import { MobxLitElement } from '@adobe/lit-mobx';

// import { store } from './store.js';

// // import './components/app-header.js';
// // import './components/app-box.js';
// // import './components/app-menu.js';

// @customElement('app-root')
// export class AppRoot extends MobxLitElement {
//   private _store = store;

//   render() {
//     return html` <main>Hello there</main> `;
//   }

//   connectedCallback(): void {
//     super.connectedCallback();
//     console.log('store: ', this._store);
//   }

//   static styles = css``;
// }
