/* eslint-disable class-methods-use-this */
import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { until } from 'lit/directives/until.js';

import { EnumRoleUser } from './enums/EnumRoleUser.js';
import routes from './config/routes.js';
import './components/nav-bar/nav-bar.component.js';
import userService from './services/UserService.js';

// roleUser has to be taken from a global store and plugged into the router
// here it is hard coded as EnumRoleUser.Employee
@customElement('app-root')
export class AppRoot extends LitElement {
  protected render(): TemplateResult<1> {
    return html`${until(this.renderApp(), this.renderLoading())}`;
  }

  private async renderApp() {
    try {
      const response = await userService.refreshToken();
      console.log('resopnse: ', response);
      return html`
        <div id="app-root">
          ${response}
          <nav-bar></nav-bar>
          <router-app
            .routes=${routes}
            roleUser=${EnumRoleUser.Manager}
          ></router-app>
        </div>
      `;
    } catch (error) {
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

  private renderLoading() {
    return html` <div>Loading...</div> `;
  }
}
