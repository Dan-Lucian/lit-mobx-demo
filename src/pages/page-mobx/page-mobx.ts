import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../../components/link-router.js';

@customElement('page-mobx')
export class PageMobx extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page Mobx</h1>
      </main>
    `;
  }
}
