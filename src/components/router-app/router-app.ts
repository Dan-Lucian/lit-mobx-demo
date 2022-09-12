import { html, TemplateResult, CSSResult } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

// TODO: create store.js to init stores
import { storeRouter } from '../../stores.js';
import IRoute from '../../Interfaces/IRoute.js';
import EnumRoleUser from '../../Enums/EnumRoleUser.js';
import stylesAppRouter from './router-app.styles.js';

@customElement('app-router')
export default class AppRouter extends MobxLitElement {
  @property({ type: Array })
  public routes: IRoute[] = [];

  @property({ type: String })
  public roleUser: EnumRoleUser = EnumRoleUser.Stranger;

  constructor() {
    super();
    storeRouter.setPathCurrent(window.location.pathname);
  }

  protected render(): TemplateResult<1> {
    return this.getComponentForCurrentPath();
  }

  private getComponentForCurrentPath(): TemplateResult<1> {
    const { routes, roleUser } = this;
    const { pathCurrent } = storeRouter;

    const routeCurrent = routes.find(r => r.path === pathCurrent);
    const routeFallthrough = routes.find(r => r.path === '*');

    // if config has no fallthrough component
    if (!routeFallthrough?.component) {
      throw new Error(
        'app-router: You need a fallthrough component assigned to "*" path'
      );
    }

    // if config has no page for the current route
    if (!routeCurrent) {
      if (routeFallthrough?.roles.includes(roleUser)) {
        return routeFallthrough.component;
      }

      const pathToRedirect =
        routeFallthrough.redirect[roleUser as EnumRoleUser] || '/login';

      this.setUrlTo(pathToRedirect);

      return this.getComponentForPath(pathToRedirect);
    }

    // if theres a page for the path but current role is denied the access
    if (!routeCurrent?.roles.includes(roleUser)) {
      const pathToRedirect: string =
        routeCurrent.redirect[roleUser as EnumRoleUser] || '/login';

      // dont explicitly set the path to be "*" and let the current one be if so
      if (pathToRedirect !== routeFallthrough.path) {
        this.replaceUrlWith(pathToRedirect);
      }

      return this.getComponentForPath(
        routeCurrent.redirect[roleUser as EnumRoleUser] || '/login'
      );
    }

    // if theres a page for the path and the current role is allowed
    this.replaceUrlWith(routeCurrent.path);
    return routeCurrent.component;
  }

  public connectedCallback(): void {
    super.connectedCallback();

    // "popstate" fires natively when back navigating in the browser
    // and artificially dispatched when <link-router> is clicked
    window.onpopstate = () => {
      storeRouter.setPathCurrent(window.location.pathname);

      // in case the url hasn't changed an update is still required
      this.requestUpdate();
    };
  }

  public disconnectedCallback(): void {
    window.onpopstate = () => null;
  }

  private setUrlTo(path: string): void {
    window.history.pushState({}, path, window.location.origin + path);
  }

  private replaceUrlWith(path: string): void {
    window.history.replaceState({}, path, window.location.origin + path);
  }

  private getComponentForPath(path: string): TemplateResult<1> {
    const { routes } = this;

    return routes.find(r => r.path === path)?.component || html`no such path`;
  }

  static styles: CSSResult = stylesAppRouter;
}
