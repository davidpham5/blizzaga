import { html, css, LitElement } from 'lit';
import { templateB } from './Footers/Footer_B.js';

export class DataFetchComponent extends LitElement {
  static get styles() {
    return css`
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
  }

  static get properties() {
    return {
      data: { type: Object },
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateB.content.cloneNode(true));
    const footer = shadowRoot.getElementById('standard-footer-B');
    console.log({ footer });
    this.data = {};

    console.log(this.constructor.observedAttributes);
    if (!this.data.length) {
      this.fetchData();
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async fetchData() {
    this.loading = true;
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const data = await response.json();
      this.data = data;
      console.log({ data });
      this.loading = false;
      // this.song = 'test'
    } catch (error) {
      console.log(error);
    }
  }

  // attributeChangedCallback(name, oldVal, newVal) {

  // }

  render() {
    return html`
      ${this.loading ? html`<h2>Loading...</h2>` : ''}
      <h2>Here is some data:</h2>
      <h3>${this.song}</h3>
      <p>${this.data.title}</p>
    `;
  }
}
