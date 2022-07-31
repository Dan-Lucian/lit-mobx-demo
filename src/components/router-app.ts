import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';

import { IRoute } from '../Interfaces/IRoute.js';
import { EnumRoleUser } from '../enums/EnumRoleUser.js';

@customElement('router-app')
export default class RouterApp extends LitElement {
  @property({ type: Array }) public routes: IRoute[] = [];

  @property({ type: Number })
  public roleUser: EnumRoleUser = EnumRoleUser.Stranger;

  @state() private routeCurrent: string = '/';

  constructor() {
    super();
    this.routeCurrent = window.location.pathname;
  }

  protected render(): TemplateResult<1> {
    return html` ${this.getComponentForCurrentPath()} `;
  }

  private getComponentForCurrentPath(): TemplateResult<1> {
    const route = this.routes.find(r => r.path === this.routeCurrent);
    const routeFallthrough = this.routes.find(r => r.path === '*');

    if (routeFallthrough?.component) {
      return (
        (route?.roles.includes(this.roleUser) && route.component) ||
        routeFallthrough.component
      );
    }

    throw new Error(
      'router-app: You need a fallthrough component assigned to "*" route'
    );
  }

  public connectedCallback(): void {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    // "popstate" fires natively when back navigating in the browser
    // and artificially dispatched when <link-router> is clicked
    window.onpopstate = () => {
      this.routeCurrent = window.location.pathname;
    };
  }

  public disconnectedCallback(): void {
    window.onpopstate = () => null;
  }
}
