import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../components/link-router.js';
import '../components/nav-bar/nav-bar.component.js'

@customElement('page-404')
export class Page404 extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page 404</h1>
      </main>
    `;
  }
}
