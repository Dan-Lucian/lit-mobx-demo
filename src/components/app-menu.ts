/* eslint-disable wc/guard-super-call */
/* eslint-disable class-methods-use-this */
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { MobxLitElement } from '@adobe/lit-mobx';
import { store } from '../store.js';

@customElement('app-menu')
export class AppMenu extends MobxLitElement {
  private _store = store;

  render() {
    return html`
      <div class="menu">
        <p>Count: ${this._store.count}</p>
      </div>
    `;
  }

  static styles = css`
    .menu {
      background: #aaa;
    }
  `;
}
