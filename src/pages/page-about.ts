import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../components/link-router.js';

@customElement('page-about')
export class PageAbout extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page about</h1>
      </main>
    `;
  }
}
