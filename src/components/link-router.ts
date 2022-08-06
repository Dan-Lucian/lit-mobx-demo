import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

@customElement('link-router')
export default class LinkRouter extends LitElement {
  @property({ type: String })
  public to: string = '/';

  @property({ type: Object })
  public styles?: CSSResult;

  protected render(): TemplateResult<1> {
    return html`
    <style>
      ${this.styles}
    </style>

    <a
      href=${this.to}
      @click=${this.onClick}
    >
      <slot></slot>
    </a>`;
  }

  private onClick(event: Event): void {
    event.preventDefault();

    window.history.pushState(
      {},
      this.to,
      window.location.origin + this.to
    );

    // "popstate" doesn't fire on window.history.pushState()
    // but it is necessary for the router to work
    // didn't create a custom event for routing in order to keep the
    // back navigation browser functionality
    window.dispatchEvent(new Event('popstate'));
  }
}
