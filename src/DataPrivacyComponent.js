import { html, LitElement } from 'lit';
import { footerStyles } from './Footers/Footer.styles.js';
import { templateA } from './Footers/Footer_A.js';

export class DataPrivacyComponent extends LitElement {
  static styles = footerStyles;

  static get properties() {
    return {
      header: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateA.content.cloneNode(true));
    // const footer = shadowRoot.getElementById('standard-footer-A');
    // console.log({ footer });
  }

  connectedCallback() {
    // invoked when a component is added to the document's DOM.
    super.connectedCallback();
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
