import { CSSResult, html, css, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import routerService from '../services/router.service.js';
import '../components/link-router.js';

@customElement('page-index')
export class PageIndex extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page index</h1>

        <ul>
          <li>
            <link-router
              route="/"
              text="page index"
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/login"
              text="page login"
              .classes=${{ 'link--red': true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/about"
              text="page about"
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/not-existent"
              text="404"
              .classes=${{ 'link--green': true }}
            ></link-router>
          </li>
        </ul>

        <button type="button" @click=${() => this.navigateTo('/about')}>
          Programatic navigation
        </button>
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
