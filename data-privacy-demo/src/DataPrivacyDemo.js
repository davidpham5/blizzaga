import { html, css, LitElement } from 'lit';

export class DataPrivacyDemo extends LitElement {
  static styles = css`
    body {
      background-color: var(--wpdp-background-color, #333333);
      color: var(--wpdp-text-color, #ffffff);
    }
    :host {
      display: block;
      padding: 25px;
      color: var(--wpdp-text-color, #ffffff);
      background-color: var(--wpdp-background-color, #333333);
    }
  `;

  static get properties() {
    return {
      header: { type: String },
      counter: { type: Number },
    };
  }

  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    super.connectedCallback();
    this.header = 'Hey there';
    this.counter = 5;
    this.title = this.getAttribute('title');
  }

  __increment() {
    this.counter += 1;
  }

  __decrement() {
    this.counter -= 1;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <h2>
        ${this.header} how many times can I click the button ${this.counter}!
      </h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement}>decrement</button>
    `;
  }
}
