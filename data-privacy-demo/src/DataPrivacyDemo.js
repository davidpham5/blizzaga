import { html, css, LitElement } from 'lit';
import { template } from './Footers/Footer_A.js';

export class DataPrivacyDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .background-white {
      background: #fff;
    }
    .gray-dark {
      color: #666;
    }

    .w-100 {
      width: 100%;
    }
    .h-100 {
      height: 100%;
    }

    .font-xxxxs {
      font-size: 0.75rem;
    }
    .center {
      text-align: center;
    }

    .db {
      display: block;
    }
    .flex {
      display: flex;
    }
    .flex-column {
      flex-direction: column;
    }
    .flex-row {
      flex-direction: row;
    }
    .justify-between {
      justify-content: space-between;
    }
    .justify-center {
      justify-content: center;
    }
    .flex-1 {
      flex: 1;
    }

    ol,
    ul {
      padding-left: 2.5rem;
      margin: 0.625rem 0;
    }
    .list-unstyled {
      list-style-type: none;
    }

    .ma-auto {
      margin: auto;
    }
    .mw-1200 {
      max-width: 1200px;
    }

    .pr-md {
      padding-right: 24px;
    }
    .pl-md {
      padding-left: 24px;
    }
    .pa-0 {
      padding: 0;
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .pb-xs {
      padding-bottom: 8px;
    }
    .pt-xs {
      padding-top: 8px;
    }
    .pl-xs {
      padding-left: 8px;
    }
    .pt-xxs {
      padding-top: 4px;
    }
    .pa-xxs {
      padding: 4px;
      padding-right: 4px;
      padding-left: 4px;
    }

    .order-1 {
      order: 1;
    }
    .order-2 {
      order: 2;
    }
    .order-3 {
      order: 3;
    }

    @media only screen and (min-width: 768px) {
      .md\:flex-row {
        flex-direction: row;
      }
      .flex-ns-row {
        flex-direction: row;
      }
      .font-xxxs-ns {
        font-size: 0.875rem;
      }
      .order-1-ns {
        order: 1;
      }
      .dib-ns {
        display: inline-block;
      }
    }
  `;

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
    shadowRoot.appendChild(template.content.cloneNode(true));
    const root = shadowRoot.getElementById('root');
    console.log({ root });
  }

  connectedCallback() {
    // invoked when a component is added to the document's DOM.
    super.connectedCallback();
  }

  firstUpdated() {
    this.root = this.renderRoot.querySelector('#root');
    console.log({ root: this.root });
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