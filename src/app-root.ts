/* eslint-disable wc/guard-super-call */
import { html, css } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement } from 'lit/decorators.js';

import { store } from './store.js';

import './components/app-header.js';
import './components/app-box.js';
import './components/app-menu.js';

@customElement('app-root')
export class AppRoot extends MobxLitElement {
  render() {
    return html`
      <main>
        <app-header></app-header>
        <app-box></app-box>
        <app-menu></app-menu>
      </main>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    console.log('store: ', store);
  }

  static styles = css``;
}
