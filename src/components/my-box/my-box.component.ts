import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { guard } from 'lit/directives/guard.js';

import { stylesMyBox } from './my-box.styles.js';

@customElement('my-box')
export class MyBox extends LitElement {
  @state()
  private count1: number = 0;

  @state()
  private count2: number = 0;

  protected render(): TemplateResult<1> {
    return html`
      <div>
        <p>Count1: ${this.count1}</p>
        <p>Count2: ${this.count2}</p>
        <p>
          Guarded by count2:
          ${(guard([this.count2], () => html`${this.count1}`))}
        </p>
        <button type="button" @click=${this.incrementCount1}>
          increment count1
        </button>
        <button type="button" @click=${this.incrementCount2}>
          increment count2
        </button>
      </div>
    `;
  }

  private incrementCount1() {
    this.count1 += 1;
  }

  private incrementCount2() {
    this.count2 += 1;
  }

  static styles: CSSResult = stylesMyBox;
}
