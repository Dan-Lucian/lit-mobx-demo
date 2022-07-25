import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { MobxLitElement } from '@adobe/lit-mobx';

@customElement('app-header')
export class AppHeader extends LitElement {
  render() {
    return html` <header class="header">I am a header</header> `;
  }

  static styles = css`
    .header {
      width: 100%;
      padding: 1em;
      background: #ccc;
    }
  `;
}
