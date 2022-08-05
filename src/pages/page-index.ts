import { CSSResult, html, css, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import routerService from '../services/router.service.js';
import '../components/link-router.js';
import '../components/nav-bar/nav-bar.component.js';

@customElement('page-index')
export class PageIndex extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page index</h1>
      </main>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private navigateTo(path: string): void {
    routerService.navigateTo(path);
  }

  static styles: CSSResult = css`
    .link {
      background: #ccc;
    }

    .link--red {
      color: red;
    }

    .link--green {
      color: green;
    }
  `;
}
