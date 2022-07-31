import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { EnumRoleUser } from './enums/EnumRoleUser.js';
import routes from './config/routes.js';

// roleUser has to be taken from a global store and plugged into the router
// here it is hard coded as EnumRoleUser.Employee
@customElement('app-root')
export class AppRoot extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <div id="app-root">
        <router-app
          .routes=${routes}
          roleUser=${EnumRoleUser.Employee}
        ></router-app>
      </div>
    `;
  }

  static styles: CSSResult = css`
    :host {
      display: flex;
    }
  `;
}
