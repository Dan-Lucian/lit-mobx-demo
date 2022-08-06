import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../link-router.js';
import { stylesLink, stylesNavBar } from './nav-bar.styles.js';

@customElement('nav-bar')
export class Page404 extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <nav>
        <ul class="list">
          <li>
            <link-router to="/" .styles=${stylesLink}>
              Home
            </link-router>
          </li>
          <li>
            <link-router to="/login" .styles=${stylesLink}>
              Login
            </link-router>
          </li>
          <li>
            <link-router to="/about" .styles=${stylesLink}>
              About
            </link-router>
          </li>
          <li>
            <link-router to="/mobx" .styles=${stylesLink}>
              Mobx
            </link-router>
          </li>
          <li>
            <link-router to="/not-existent" .styles=${stylesLink}>
              404
            </link-router>
          </li>
        </ul>
      </nav>
    `;
  }

  static styles: CSSResult[] = [stylesNavBar];
}
