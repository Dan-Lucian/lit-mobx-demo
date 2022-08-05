import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../link-router.js';
import { stylesNavBar } from './nav-bar.styles.js';

@customElement('nav-bar')
export class Page404 extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <nav>
        <ul class="list">
          <li>
            <link-router
              route="/"
              .content=${html`Home`}
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/login"
              .content=${html`Login`}
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/about"
              .content=${html`About`}
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/mobx"
              .content=${html`MobX`}
              .classes=${{ link: true }}
            ></link-router>
          </li>
          <li>
            <link-router
              route="/not-existent"
              .content=${html`404`}
              .classes=${{ link: true }}
            ></link-router>
          </li>
        </ul>
      </nav>
    `;
  }

  static styles: CSSResult[] = [stylesNavBar];
}
