/* eslint-disable class-methods-use-this */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { MobxLitElement } from '@adobe/lit-mobx';
// import { store } from '../store.js';

import { FormUser } from '../interfaces/FormUser.js';

@customElement('app-box')
export class AppBox extends LitElement {
  render() {
    const { _handleSubmit } = this;

    return html`
      <div>
        <form class="form" @submit=${_handleSubmit}>
          <label for="name">Name: </label>
          <input type="text" name="name" id="name" />

          <label for="age">Age: </label>
          <input type="text" name="age" id="age" />

          <button type="submit">Submit</button>
        </form>
      </div>
    `;
  }

  private _handleSubmit(event: Event) {
    event.preventDefault();

    if (event.target instanceof HTMLFormElement) {
      const { name, age } = <FormUser>event.target.elements;
      const user = {
        name: name.value,
        age: Number(age.value),
      };

      console.log('submit: ', user);
      // store.addUser(user);
    }
  }

  static styles = css`
    .form {
      display: grid;
      grid-template-columns: 100px 200px;
      row-gap: 0.5em;
    }
  `;
}
