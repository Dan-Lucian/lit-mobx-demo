import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../components/link-router.js';

@customElement('page-about')
export class PageAbout extends LitElement {
  protected render(): TemplateResult<1> {
    return html`
      <main>
        <h1>Page about</h1>

        <ul>
          <li><link-router route="/" text="page index"></link-router></li>
          <li><link-router route="/login" text="page login"></link-router></li>
          <li><link-router route="/about" text="page about"></link-router></li>
          <li><link-router route="/not-existent" text="404"></link-router></li>
        </ul>
      </main>
    `;
  }
}
