import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../../components/link-router.js';

@customElement('page-login')
export class PageLogin extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page login</h1>
      </main>
    `;
  }
}
