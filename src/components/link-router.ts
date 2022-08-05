import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap, ClassInfo } from 'lit/directives/class-map.js';

@customElement('link-router')
export default class LinkRouter extends LitElement {
  @property({ type: String })
  public route: string = '/';

  @property({ type: Object })
  public classes: ClassInfo = {};

  @property({ type: Object })
  public content: TemplateResult<1> = html``;

  protected render(): TemplateResult<1> {
    return html`<a
      href="#"
      class=${classMap(this.classes)}
      @click=${this.onClick}
    >
      ${this.content}
    </a>`;
  }

  private onClick(event: Event): void {
    event.preventDefault();

    window.history.pushState(
      {},
      this.route,
      window.location.origin + this.route
    );

    // "popstate" doesn't fire on window.history.pushState()
    // but it is necessary for the router to work
    // didn't create a custom event for routing in order to keep the
    // back navigation browser functionality
    window.dispatchEvent(new Event('popstate'));
  }

  // do not attach a shadow for styling purposes
  // in order to allow styling by the parent using a classes prop
  protected createRenderRoot() {
    return this;
  }
}
