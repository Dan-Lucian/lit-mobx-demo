/* eslint-disable wc/guard-super-call */
/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { MobxLitElement } from '@adobe/lit-mobx';

@customElement('app-menu')
export class AppMenu extends LitElement {
  render() {
    return html`
      <div class="menu">
        <p>Count:</p>
      </div>
    `;
  }

  static styles = css`
    .menu {
      background: #aaa;
    }
  `;
}
