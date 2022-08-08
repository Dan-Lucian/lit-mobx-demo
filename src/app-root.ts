import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { EnumRoleUser } from './enums/EnumRoleUser.js';
import routes from './config/routes.js';
import './components/nav-bar/nav-bar.component.js';

// roleUser has to be taken from a global store and plugged into the router
// here it is hard coded as EnumRoleUser.Employee
@customElement('app-root')
export class AppRoot extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <div id="app-root">
        <nav-bar></nav-bar>
        <router-app
          .routes=${routes}
          roleUser=${EnumRoleUser.Manager}
        ></router-app>
      </div>
    `;
  }
}
